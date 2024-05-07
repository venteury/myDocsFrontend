import React from "react";

const TextEditorInput = React.forwardRef(
  ({ onChange, value, placeholder }, ref) => {
    return (
      <div className="w-full max-w-6xl mx-auto mt-8 min-h-screen">
        <div className="bg-white rounded-lg shadow-md">
          <textarea
            ref={ref}
            value={value}
            onChange={onChange}
            className="w-full  border border-gray-300 p-4 focus:outline-none min-h-screen"
            placeholder={placeholder}
          ></textarea>
        </div>
      </div>
    );
  }
);

export default TextEditorInput;
