// src/Layout.js
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 ">
      <header className="bg-red-300 text-white py-4 fixed top-0 w-full z-10">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-bold">My Docs</h1>
        </div>
      </header>
      <main className="container mx-auto px-4  flex-grow mt-16 overflow-y-auto overscroll-y-none">
        {children}
      </main>
      {/* <footer className="bg-red-300 text-white py-4 fixed bottom-0 w-full z-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 App Avengers. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Layout;
