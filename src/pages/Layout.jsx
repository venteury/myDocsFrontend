import { useState } from "react";

const Layout = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className="flex flex-col min-h-screen bg-gray-100  "
        style={{
          backgroundImage:
            "url('https://www.desktopbackground.org/p/2013/12/05/680424_light-blue-background-images-for-websites-hd_800x600_h.jpg'",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <header
          className={`bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 fixed top-0 w-full z-10 transition-colors duration-500 ${
            isHovered ? "bg-red-500" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">My Docs</h1>
          </div>
        </header>

        <main className="container mx-auto px-4  flex-grow mt-16 overflow-y-auto overscroll-y-none">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
