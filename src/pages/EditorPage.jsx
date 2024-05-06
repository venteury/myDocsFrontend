import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import documentService from "../services/document.service";
import Button from "../components/Button";

const EditorPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const [text, setText] = useState("");
  const [file, setFile] = useState({});
  const textAreaRef = useRef(null);

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

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between px-5 py-3">
        <span className="w-fit h-fit mt-1 text-yellow-600">{file?.name} :</span>

        <Button
          type="button"
          buttonStyle="outlined"
          className={"text-red-500"}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
      <div className="w-full min-h-screen bg-white shadow-md rounded-md">
        <ReactQuill
          className="quill-editor h-screen"
          ref={textAreaRef}
          theme="snow" // or 'bubble' for a bubble theme
          value={text}
          onChange={handleChange}
          placeholder="Start writing..."
        />
      </div>
    </div>
  );
};

export default EditorPage;
