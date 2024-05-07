import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import documentService from "../services/document.service";
import Button from "../components/Button";
import { debounce } from "lodash";
import TextEditorInput from "../components/InputEditor";

const EditorPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const [text, setText] = useState("");
  const [file, setFile] = useState({});
  const textAreaRef = useRef(null);
  const [saveStatus, setSaveStatus] = useState("");

  useEffect(() => {
    if (data?.id) {
      (async () => {
        const res = await documentService.getDocumentById(data?.id);
        if (res.data) {
          setText(() => res?.data?.data);
          setFile(() => res?.data);
        }
      })();
    }
  }, []);

  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  const saveDataToBackend = async (value) => {
    setSaveStatus("Saving...");
    const res = await documentService.updateDocumentById(file?._id, {
      data: value,
      name: file?.name,
    });

    setTimeout(() => {
      setSaveStatus("Saved");
      setTimeout(() => setSaveStatus(""), 2000); // Reset save status after 2 seconds
    }, 2000);
  };

  const handleChange = debounce((value) => {
    saveDataToBackend(value);
  }, 1000);

  const handleInputChange = (value) => {
    setText(value);
    handleChange(value);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between px-1 py-3">
        <span className="w-fit h-fit mt-1 text-yellow-600">{file?.name}</span>
        {saveStatus && (
          <span
            style={{
              color: saveStatus === "Saving..." ? "orange" : "green",
              marginLeft: "",
            }}
          >
            {saveStatus}
          </span>
        )}

        <Button
          type="button"
          buttonStyle="outlined"
          textColor="text-red-500"
          className={"text-red-500 hover:text-red-400"}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
      <div className="w-full min-h-screen">
        <ReactQuill
          className="quill-editor h-screen"
          ref={textAreaRef}
          theme="snow" // or 'bubble' for a bubble theme
          value={text}
          onChange={handleInputChange}
          placeholder="Start writing..."
        />

        {/* <TextEditorInput
          ref={textAreaRef}
          value={text}
          onChange={(e) => handleInputChange(e)}
          placeholder="Start writing..."
        /> */}
      </div>
    </div>
  );
};

export default EditorPage;
