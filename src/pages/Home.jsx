import {
   FaArrowDown,
   FaFileArrowDown,
   FaGithub,
   FaInstagram,
   FaLaptopCode,
   FaLinkedin,
   FaNetworkWired,
   FaReact,
   FaRobot,
   FaServer,
   FaUserGraduate,
   FaYoutube,
} from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";

import logo from "/logo/Logo with Text HD.png";
import foto from "/profile/Foto.png";
import portfolio1 from "/portfolio/core-it.png";
import portfolio2 from "/portfolio/nexa-app.png";
import portfolio3 from "/portfolio/coderun-modern-lms.png";

import "../styles/home.css";
import ArticleButton from "../components/actions/ArticleButton";
import { useLocation, useOutletContext } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
   const skills = [
      {
         icon: <FaLaptopCode className="icon" />,
         title: "Programming",
         expertise: ["C/C++", "Java", "Javascript", "PHP", "Python", "Node Js"],
      },

      {
         icon: <FaReact className="icon" />,
         title: "Frontend Web",
         expertise: [
            "Html",
            "Css",
            "React Js",
            "Tailwind",
            "Bootstrap",
            "Laravel",
         ],
      },
      {
         icon: <FaServer className="icon" />,
         title: "Backend",
         expertise: [
            "Express Js",
            "Laravel",
            "REST API",
            "JWT Auth",
            "MySQL",
            "MongoDB",
            "Firebase",
         ],
      },
      {
         icon: <FaRobot className="icon" />,
         title: "Artificial Intelligence",
         expertise: [
            "K-Nearest Neighbor (KNN)",
            "Model Training",
            "Model Evaluation",
         ],
      },
      {
         icon: <FaNetworkWired className="icon" />,
         title: "Networking",
         expertise: [
            "IP Addressing & Subnetting",
            "Cisco Simulation",
            "Peer-to-peer configuration",
         ],
      },
   ];

   const portfolios = [
      {
         title: "CORE IT",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sed quibusdam blanditiis maxime asperiores nulla quia, illum reprehenderit officiis aperiam. Amet facilis praesentium optio sequi corrupti ipsam inventore quia sunt?",
         image: portfolio1,
         url: "https://github.com/bintang25a/project-CoreIT",
      },
      {
         title: "Nexa App",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sed quibusdam blanditiis maxime asperiores nulla quia, illum reprehenderit officiis aperiam. Amet facilis praesentium optio sequi corrupti ipsam inventore quia sunt?",
         image: portfolio2,
         url: "https://github.com/bintang25a/nexa-app-frontend",
      },
      {
         title: "Coderun Modern - Learning Management System",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sed quibusdam blanditiis maxime asperiores nulla quia, illum reprehenderit officiis aperiam. Amet facilis praesentium optio sequi corrupti ipsam inventore quia sunt?",
         image: portfolio3,
         url: "https://github.com/bintang25a/coderun-modern-lms-frontend",
      },
      {
         title: "Coderun Modern - Learning Management System",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sed quibusdam blanditiis maxime asperiores nulla quia, illum reprehenderit officiis aperiam. Amet facilis praesentium optio sequi corrupti ipsam inventore quia sunt?",
         image: portfolio3,
         url: "https://github.com/bintang25a/coderun-modern-lms-frontend",
      },
   ];

   const otherProject = [
      {
         title: "Coderun Modern - LMS: backend",
         url: "https://github.com/bintang25a/coderun-modern-lms-backend",
      },
      {
         title: "Roomit: frontend",
         url: "https://github.com/bintang25a/roomit-fe",
      },
      {
         title: "Roomit: backend",
         url: "https://github.com/bintang25a/roomit-be",
      },
      {
         title: "Booksales: backend",
         url: "https://github.com/bintang25a/booksales-api-laravel",
      },
      {
         title: "Program Numerik (C lang)",
         url: "https://github.com/bintang25a/program_metodeNumerik",
      },
      {
         title: "Share Story App",
         url: "https://github.com/bintang25a/share-story-app",
      },
      {
         title: "React Template",
         url: "https://github.com/bintang25a/bintang-react-template",
      },
   ];

   const {
      handleScrollHome,
      handleScrollCreator,
      handleScrollSkills,
      handleScrollPortfolio,
      handleScrollContact,
      setIsOpen,
      theme,
   } = useOutletContext();

   const location = useLocation();

   useEffect(() => {
      const target = location.state?.target;

      if (target) {
         if (target === "home") handleScrollHome();
         else if (target === "about") handleScrollCreator();
         else if (target === "skills") handleScrollSkills();
         else if (target === "portfolio") handleScrollPortfolio();
         else if (target === "contact") handleScrollContact();

         window.history.replaceState({}, document.title);
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [location]);

   const handleDownload = () => {
      setIsOpen(false);
      const filePath = "/files/CV - Full-Stack Web Developer.pdf";

      const link = document.createElement("a");
      link.href = filePath;

      // 3. Tentukan nama file saat di-download
      link.setAttribute("download", "CV - Full-Stack Web Developer.pdf");

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   };

   const handleToLinkedin = () => {
      setIsOpen(false);

      window.open(
         "https://linkedin.com/in/bintang25a",
         "_blank",
         "noopener,noreferrer"
      );
   };

   const handleToGithub = (url = "") => {
      setIsOpen(false);

      window.open(
         url ? url : "https://github.com/bintang25a",
         "_blank",
         "noopener,noreferrer"
      );
   };

   const handleSubmit = () => {
      setIsOpen(false);

      alert(
         "Sorry this feature still under development\nClick email in the left side to contact me :D"
      );
   };

   return (
      <main theme={theme} className="__home-page">
         <section className="hero">
            <article>
               <h2>
                  About this website, <br /> <span>STAR</span>
                  <span>DEVS</span>
               </h2>

               <p>
                  Halo, saya Bintang Al Fizar! Stardevs merupakan proyek pribadi
                  saya. Website ini akan diisi dengan beberapa konten terkait
                  saya, seperti Portofolio, Blog, dan juga Games yang saya suka
                  mainkan. Halaman web ini merupakan halaman utama dari
                  Stardevs. Ikuti kegiatan saya dalam membuat proyek pada laman
                  web ini!
               </p>

               <ArticleButton size={3} action={handleScrollCreator}>
                  Creator <FaUserGraduate className="icon" />
               </ArticleButton>

               <ArticleButton size={3} action={handleScrollContact}>
                  Contact <FaArrowDown className="icon" />
               </ArticleButton>
            </article>

            <article>
               <img src={logo} alt="Logo with Text HD" />
            </article>
         </section>

         <section className="about" id="about">
            <article>
               <img src={foto} alt="Foto" />
            </article>

            <article>
               <h2>
                  Halo Everyone, I'm <br /> <span>Bintang Al Fizar</span> <br />
                  <span>Frontend Web & Backend Developer</span>
               </h2>

               <ArticleButton action={handleDownload}>
                  Download CV <FaFileArrowDown className="icon" />
               </ArticleButton>
               <ArticleButton action={handleScrollContact}>
                  Contact Me <FaArrowDown className="icon" />
               </ArticleButton>
            </article>

            <article>
               <h2>About</h2>
               <p>
                  I'm a Full-Stack Web Developer who enjoys turning ideas into
                  functional, clean, and high-impact web applications. I work
                  with modern JavaScript technologies like React.js, and I build
                  backend services using both Laravel and Node.js with
                  Express-supported by MySQL and secure JWT Authentication.
               </p>
            </article>

            <article>
               <h2>Social</h2>

               <p>Follow my Social Media for other information</p>

               <a
                  className="social__auth-page"
                  href="https://linkedin.com/in/bintang25a"
                  target="_blank"
                  title="Bintang Al Fizar"
               >
                  <FaLinkedin className="icon" />
               </a>
               <a
                  className="social"
                  href="https://github.com/bintang25a"
                  target="_blank"
                  title="bintang25a"
               >
                  <FaGithub className="icon" />
               </a>
               <a
                  className="social"
                  href="https://youtube.com/@bintangalfizar9749"
                  target="_blank"
                  title="Bintang Al Fizar"
               >
                  <FaYoutube className="icon" />
               </a>
               <a
                  className="social"
                  href="https://instagram.com/bintang_alfizar_"
                  target="_blank"
                  title="bintang_alfizar_"
               >
                  <FaInstagram className="icon" />
               </a>
               <a
                  className="social"
                  href="mailto:bintangalfizar25@gmail.com"
                  target="_blank"
                  title="bintangalfizar25@gmail.com"
               >
                  <FaMailBulk className="icon" />
               </a>
            </article>
         </section>

         <section className="skills" id="skills">
            <h2>My Skills</h2>

            <div className="container">
               {skills?.map((skill, i) => (
                  <div key={i} className="card">
                     {skill?.icon}
                     <h3>{skill?.title}</h3>
                     <ul>
                        {skill?.expertise?.map((item, i) => (
                           <li key={i}>{item}</li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            <article>
               <p>
                  Please check my LinkedIn and Github to see my other skills.
               </p>

               <ArticleButton size={3} action={handleToLinkedin}>
                  <FaLinkedin className="icon" /> LinkedIn
               </ArticleButton>

               <ArticleButton size={3} action={() => handleToGithub(false)}>
                  <FaGithub className="icon" /> Github
               </ArticleButton>
            </article>
         </section>

         <section className="portfolio" id="portfolio">
            <h2>Portofolio</h2>

            <div className="container">
               <div className="card">
                  <h3>My Work</h3>
                  <p>
                     Explore my most impactful work. This section features my
                     top three projects, ranging from Web Development to AI
                     Modelling, reflecting my passion for building functional
                     and scalable solutions.
                  </p>
               </div>

               {portfolios?.map((portfolio, i) => (
                  <div
                     key={i}
                     className="card"
                     title={portfolio?.url}
                     onClick={() => handleToGithub(portfolio?.url)}
                  >
                     <h3>{portfolio?.title}</h3>
                     <img src={portfolio?.image} alt={portfolio?.title} />
                  </div>
               ))}

               <div className="card">
                  <h3>Other Project</h3>

                  <p>
                     another project of mine that is not highlighted but is no
                     less good
                  </p>

                  <ul>
                     {otherProject?.map((item, i) => (
                        <li key={i}>
                           <a href={item?.url} target="_blank">
                              {item?.title}
                           </a>
                        </li>
                     ))}
                  </ul>

                  <ArticleButton size={1} action={() => handleToGithub(false)}>
                     <FaGithub className="icon" /> Github
                  </ArticleButton>
               </div>
            </div>
         </section>

         <section className="contact" id="contact">
            <article>
               <h2>
                  <FaMailBulk className="icon" /> Contact Me
               </h2>
               <p>
                  For commissions and project inquiries, please email:{" "}
                  <a href="mailto:bintangalfizar25@gmail.com">
                     bintangalfizar25@gmail.com
                  </a>
                  <br />
                  or send a message via this form
               </p>
            </article>
            <article>
               <form>
                  <div className="input-field">
                     <label htmlFor="name">Full Name</label>
                     <input type="text" name="name" id="name" required />
                  </div>
                  <div className="input-field">
                     <label htmlFor="email">Email</label>
                     <input type="email" name="email" id="email" required />
                  </div>
                  <div className="input-field">
                     <label htmlFor="message">Write a message</label>
                     <textarea name="message" id="message" required></textarea>
                  </div>
                  <button onClick={handleSubmit}>Send message</button>
               </form>
            </article>
         </section>
      </main>
   );
};

export default Home;
