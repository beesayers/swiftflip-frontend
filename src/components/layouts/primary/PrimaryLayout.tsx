import Head from "next/head";
import { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {
  darkMode?: boolean;
  brandingColor?: string;
  pageTitle?: string;
  pageDescription?: string;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  brandingColor = "indigo-600",
  pageTitle = "SwiftFlip",
  pageDescription = "Flip Swiftly",
  ...divProps
}) => {
  const [darkMode, setDarkMode] = useState(false);
  const modeClass = darkMode ? "dark" : "";

  useEffect(() => {
    // Check if the user's browser supports the 'prefers-color-scheme' media query
    if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  // Function to toggle the theme
  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <div {...divProps} className={` ${modeClass} `}>
        {/* Sidebar Layout component code goes here */}
        <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode}></Sidebar>

        {/* ... */}

        <main className="py-10 lg:pl-64">
          <div>{children}</div>
        </main>
      </div>
    </>
  );
};

export default PrimaryLayout;
