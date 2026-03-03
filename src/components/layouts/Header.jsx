import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

const Header = ({ isOpen, setIsOpen }) => {
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
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

   return (
      <header className={scrolled ? "scrolled" : null}>
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
         </nav>

         <button onClick={() => setIsOpen(!isOpen)}>
            <IoMenu />
         </button>
      </header>
   );
};

export default Header;
