import React from "react";

const Modal = ({ isOpen, close, submit, title, children }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0  bg-slate-400 opacity-50"></div>
        <div className="bg-white rounded-lg overflow-hidden z-50 w-96">
          <div className="flex justify-between items-center px-4 py-2  bg-slate-400 text-white">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button onClick={close} className="text-white">
              &times;
            </button>
          </div>
          <div className="flex justify-center items-center py-2">
            {children}
          </div>
          <div className="mr-4 mb-4">
            <div className="flex justify-end">
              <button
                onClick={submit}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
