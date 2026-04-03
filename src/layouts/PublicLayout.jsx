import { Outlet } from "react-router-dom";

import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

import "../styles/layout.css";
import { useEffect, useState } from "react";
import AnimatedBackground from "../components/backgrounds/AnimatedBackground";

const PublicLayout = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [theme, setTheme] = useState("high");

   const handleScrollHome = () => {
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: "smooth",
      });
   };

   const handleScrollCreator = () => {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
   };

   const handleScrollSkills = () => {
      document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
   };

   const handleScrollPortfolio = () => {
      document
         ?.getElementById("portfolio")
         ?.scrollIntoView({ behavior: "smooth" });
   };

   const handleScrollContact = () => {
      document
         ?.getElementById("contact")
         ?.scrollIntoView({ behavior: "smooth" });
   };

   useEffect(() => {
      const tempTheme = localStorage.getItem("theme");

      if (!tempTheme) {
         localStorage.setItem("theme", "high");
      } else {
         setTheme(tempTheme);
      }
   }, []);

   return (
      <>
         <Header
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            theme={theme}
            setTheme={setTheme}
         />
         <Outlet
            context={{
               handleScrollHome,
               handleScrollCreator,
               handleScrollSkills,
               handleScrollPortfolio,
               handleScrollContact,
               setIsOpen,
               theme,
            }}
         />
         <Footer theme={theme} />
         {theme == "high" ? <AnimatedBackground /> : null}
      </>
   );
};

export default PublicLayout;
