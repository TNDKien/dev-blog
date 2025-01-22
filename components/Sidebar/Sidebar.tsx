"use client";

import Link from "next/link";
import { ChevronDown, Lock, Menu, X, Sun, Moon } from "lucide-react";
import { useState, useContext, createContext, useEffect } from "react";

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
      className="block px-2 py-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
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
  const [isDark, setIsDark] = useState<boolean | null>(null);
  const [openSections, setOpenSections] = useState({
    gettingStarted: true,
    mouse: false,
    misc: false,
    "3d": false,
  });

  useEffect(() => {
    // Check initial theme on mount
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    setIsDark(!isDark);
  };

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
        className="fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle Sidebar"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        ) : (
          <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-4 sm:p-6 w-[280px] sm:w-[320px] transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 pt-14 flex items-center justify-between">
          <img
            className="rounded-full w-16 h-16 object-cover"
            src="/me.jpeg"
            alt="Kien Dang"
          />
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        <nav className="space-y-2 text-gray-900 dark:text-gray-100">
          <div>
            <button
              onClick={() => toggleSection("gettingStarted")}
              className="flex items-center justify-between w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
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
              className="flex items-center justify-between w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
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
                <div className="flex items-center px-2 py-1 text-gray-400 dark:text-gray-500">
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
              className="flex items-center justify-between w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
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
