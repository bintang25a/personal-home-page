import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoContrast, IoInvertMode, IoMenu } from "react-icons/io5";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Header = ({ isOpen, setIsOpen, theme, setTheme }) => {
   const [scrolled, setScrolled] = useState(false);
   const [bubbleActive, setBubbleActive] = useState(false);

   useEffect(() => {
      const tempTheme = localStorage.getItem("theme");
      setBubbleActive(tempTheme !== "high");

      const handleScroll = () => {
         if (window.scrollY > 50) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const toggleTheme = () => {
      const tempTheme =
         theme == "high" ? "dark" : theme == "dark" ? "light" : "high";

      if (tempTheme == "high") setBubbleActive(false);

      setTheme(tempTheme);
      localStorage.setItem("theme", tempTheme);
   };

   return (
      <header className={scrolled ? "scrolled" : null} theme={theme}>
         <Link to={"/"} state={{ target: "home" }} className="logo">
            <img src="/logo/Logo only transparant.png" alt="Logo" />
            <h1>
               STAR<span>DEVS</span>
            </h1>
         </Link>

         <nav
            className={isOpen ? "" : "closed"}
            onClick={() => setIsOpen(false)}
         >
            <Link to={"/"} state={{ target: "home" }}>
               Home
            </Link>
            <Link to={"/"} state={{ target: "about" }}>
               About Me
            </Link>
            <Link to={"/"} state={{ target: "skills" }}>
               Skills
            </Link>
            <Link to={"/"} state={{ target: "portfolio" }}>
               Portfolio
            </Link>
            <Link to={"/"} state={{ target: "contact" }}>
               Contact
            </Link>
            <Link to={"/blogs"} className="move">
               Blogs <FaExternalLinkAlt />
            </Link>
            <Link to={"/games"} className="move">
               Games <FaExternalLinkAlt />
            </Link>

            <div className="theme-container">
               <button
                  title={`Theme ${theme}`}
                  onClick={toggleTheme}
                  className="theme-button"
               >
                  {theme == "high" ? (
                     <IoInvertMode />
                  ) : theme == "dark" ? (
                     <FaMoon />
                  ) : (
                     <FaSun />
                  )}
               </button>

               {bubbleActive && (
                  <div className="chat-bubble">
                     Better experience? Set to High Theme
                  </div>
               )}
            </div>
         </nav>

         <div className="action-container">
            <button
               title={`Theme ${theme}`}
               onClick={toggleTheme}
               className="theme"
            >
               {theme == "high" ? (
                  <IoInvertMode />
               ) : theme == "dark" ? (
                  <FaMoon />
               ) : (
                  <FaSun />
               )}
            </button>

            <button onClick={() => setIsOpen(!isOpen)}>
               <IoMenu />
            </button>
         </div>
      </header>
   );
};

export default Header;
