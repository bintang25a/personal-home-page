import { Outlet } from "react-router-dom";

import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

import "../styles/layout.css";
import { useState } from "react";

const PublicLayout = () => {
   const [isOpen, setIsOpen] = useState(false);

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

   return (
      <>
         <Header isOpen={isOpen} setIsOpen={setIsOpen} />
         <Outlet
            context={{
               handleScrollHome,
               handleScrollCreator,
               handleScrollSkills,
               handleScrollPortfolio,
               handleScrollContact,
               setIsOpen,
            }}
         />
         <Footer />
      </>
   );
};

export default PublicLayout;
