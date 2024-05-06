import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { useState, useRef, useEffect } from "react";

const EditorPage = () => {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);

  useEffect(() => {
    // Focus on the text area when the component mounts
    textAreaRef.current.focus();
  }, []);

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <div className="min-h-screen bg-gray-100">
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
