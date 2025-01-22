"use client";

import Link from "next/link";
import { ChevronDown, Lock, Menu, X } from "lucide-react";
import { useState, useContext, createContext } from "react";

const SidebarLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const [_, setIsOpen] = useContext(SidebarContext);

  return (
    <Link
      href={href}
      className="block px-2 py-1 text-gray-600 hover:text-gray-900"
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
};

// Create a context to manage the sidebar state
const SidebarContext = createContext<[boolean, (open: boolean) => void]>([
  false,
  () => {},
]);

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    gettingStarted: true,
    mouse: false,
    misc: false,
    "3d": false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <SidebarContext.Provider value={[isOpen, setIsOpen]}>
      {/* Toggle Button - Fixed Position */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle Sidebar"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-600" />
        ) : (
          <Menu className="w-6 h-6 text-gray-600" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-200 p-4 sm:p-6 w-[280px] sm:w-[320px] transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 pt-14">
          {" "}
          {/* Added padding-top to account for toggle button */}
          <img
            className="rounded-full w-16 h-16 object-cover"
            src="/me.jpeg"
            alt="Kien Dang"
          />
        </div>

        <nav className="space-y-2">
          <div>
            <button
              onClick={() => toggleSection("gettingStarted")}
              className="flex items-center justify-between w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
            >
              <span className="font-medium">General</span>
              <ChevronDown
                className={`w-4 h-4 transform transition-transform ${
                  openSections.gettingStarted ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSections.gettingStarted && (
              <div className="ml-4 mt-1 space-y-1">
                <SidebarLink href="/">Introduction</SidebarLink>
                <SidebarLink href="/articles">Articles</SidebarLink>
                <SidebarLink href="/gallery">Gallery</SidebarLink>
              </div>
            )}
          </div>
          {/* Mouse section */}
          <div>
            <button
              onClick={() => toggleSection("mouse")}
              className="flex items-center justify-between w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
            >
              <span className="font-medium">Mouse</span>
              <ChevronDown
                className={`w-4 h-4 transform transition-transform ${
                  openSections.mouse ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSections.mouse && (
              <div className="ml-4 mt-1 space-y-1">
                <div className="flex items-center px-2 py-1 text-gray-400">
                  Mouse Parallax Goes to Wonderland
                  <Lock className="w-3 h-3 ml-1" />
                </div>
              </div>
            )}
          </div>
          {/* Misc section */}
          {/* <div>
            <button
              onClick={() => toggleSection("misc")}
              className="flex items-center justify-between w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
            >
              <span className="font-medium">Misc</span>
              <ChevronDown
                className={`w-4 h-4 transform transition-transform ${
                  openSections.misc ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSections.misc && (
              <div className="ml-4 mt-1 space-y-1">
                <div className="flex items-center px-2 py-1 text-gray-400">
                  Mask Entry
                  <Lock className="w-3 h-3 ml-1" />
                </div>
                <div className="flex items-center px-2 py-1 text-gray-400">
                  Capsule Physics
                  <Lock className="w-3 h-3 ml-1" />
                </div>
                <div className="flex items-center px-2 py-1 text-gray-400">
                  Image Pixel Loading
                  <Lock className="w-3 h-3 ml-1" />
                </div>
              </div>
            )}
          </div> */}
          {/* 3D section */}
          <div>
            <button
              onClick={() => toggleSection("3d")}
              className="flex items-center justify-between w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
            >
              <span className="font-medium">3D</span>
              <ChevronDown
                className={`w-4 h-4 transform transition-transform ${
                  openSections["3d"] ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSections["3d"] && (
              <div className="ml-4 mt-1 space-y-1">
                <SidebarLink href="/blog/firstapp">First App</SidebarLink>
                <SidebarLink href="/blog/blog2">3D Glass Effect</SidebarLink>
              </div>
            )}
          </div>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </SidebarContext.Provider>
  );
}
