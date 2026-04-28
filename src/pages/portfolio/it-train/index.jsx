import { Link, useLocation } from "react-router-dom";
import { FaExternalLinkAlt, FaMailBulk } from "react-icons/fa";
import { useEffect, useState } from "react";
import "../../../styles/it-train.css";
import {
   FaArrowDown,
   FaFileArrowDown,
   FaGithub,
   FaInstagram,
   FaLinkedin,
   FaUserGraduate,
   FaYoutube,
} from "react-icons/fa6";
import ArticleButton from "../../../components/actions/ArticleButton";
import logo from "/logo/Logo with Text HD.png";
import AnimatedBackground from "../../../components/backgrounds/AnimatedBackground";
import BrightGradientBackground from "../../../components/backgrounds/BrightGradientBackground";
import { HiOutlineTicket, HiTag } from "react-icons/hi";

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
               TRAIN<span>ING IT</span>
            </h1>
         </Link>

         <nav
            className={isOpen ? "" : "closed"}
            onClick={() => setIsOpen(false)}
         >
            <Link to={"/portfolio/it-train"} state={{ target: "home" }}>
               Home
            </Link>
            <Link to={"/portfolio/it-train"} state={{ target: "promo" }}>
               Promo
            </Link>
            <Link to={"/portfolio/it-train"} state={{ target: "blog" }}>
               Blog
            </Link>
            <Link to={"/login"} className="move">
               Login <FaExternalLinkAlt />
            </Link>
            <Link
               to={"https://learn.inixindo.id/login/index.php"}
               className="move"
            >
               E-Learning <FaExternalLinkAlt />
            </Link>
         </nav>
      </header>
   );
};

const Footer = () => {
   return (
      <footer>
         &copy; 2026, Bintang Al Fizar | <span>| TRAIN</span>
         <span>ING IT</span>
      </footer>
   );
};

export default function ItTrain() {
   const handleScrollPromo = () => {
      document.getElementById("promo").scrollIntoView({ behavior: "smooth" });
   };

   const handleScrollBlog = () => {
      document.getElementById("promo").scrollIntoView({ behavior: "smooth" });
   };

   const handleScrollHome = () => {
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: "smooth",
      });
   };

   const location = useLocation();

   useEffect(() => {
      const target = location.state?.target;

      if (target) {
         if (target === "home") handleScrollHome();
         else if (target === "promo") handleScrollPromo();
         else if (target === "blog") handleScrollBlog();

         window.history.replaceState({}, document.title);
      }

   }, [location]);

   return (
      <>
         <Header />
         <main className="__it-train">
            <section className="hero" id="home">
               <article>
                  <h2>
                     ABOUT <span>TRAIN</span>
                     <span>ING IT</span>
                  </h2>

                  <p>
                     Jembatani kesenjangan antara ambisi dan keahlian melalui
                     program pelatihan IT komprehensif yang dirancang oleh para
                     praktisi industri. Kami menghadirkan kurikulum berbasis
                     proyek nyata yang tidak hanya membekali Anda dengan
                     penguasaan teknologi terbaru, tetapi juga membentuk
                     ketangguhan mental untuk beradaptasi di tengah akselerasi
                     digital yang dinamis. Mulailah perjalanan transformatif
                     Anda hari ini dan jadilah talenta teknologi yang paling
                     dicari oleh perusahaan global.
                  </p>

                  <ArticleButton size={3} action={handleScrollPromo}>
                     Promo <FaArrowDown className="icon" />
                  </ArticleButton>
               </article>

               <article>
                  <img src={logo} alt="Logo with Text HD" />
               </article>
            </section>

            <section className="promo" id="promo">
               <h2>Special Offer</h2>

               <div className="container">
                  <div className="card">
                     <span>50%</span>
                     <p>Newbie Offer</p>
                     <HiOutlineTicket className="icon" />
                  </div>
                  <div className="card">
                     <span>10%</span>
                     <p>Weekly Pack</p>
                     <HiTag className="icon" />
                  </div>
                  <div className="card">
                     <span>20%</span>
                     <p>Monthly Pack</p>
                     <HiOutlineTicket className="icon" />
                  </div>
                  <div className="card">
                     <span>40%</span>
                     <p>Old Student</p>
                     <HiTag className="icon" />
                  </div>
               </div>
            </section>

            <section className="blog" id="blog">
               <h2>Blog</h2>

               <article>
                  <h3>
                     Membangun Bangsa Digital: Pentingnya Literasi IT bagi
                     Masyarakat Modern
                  </h3>

                  <p>
                     Dunia yang kita tinggali hari ini telah berubah secara
                     radikal dalam satu dekade terakhir. Kehadiran teknologi
                     informasi (IT) tidak lagi terbatas pada ruang perkantoran
                     atau laboratorium komputer, melainkan telah merasuk ke
                     dalam saku setiap individu melalui ponsel pintar. Namun, di
                     balik kemudahan yang ditawarkan, muncul sebuah tantangan
                     besar: sejauh mana masyarakat kita benar-benar memahami
                     cara kerja teknologi tersebut? Peningkatan pengetahuan IT
                     di masyarakat bukan lagi sebuah pilihan, melainkan sebuah
                     keharusan untuk bertahan dan berkembang di abad ke-21.
                  </p>

                  <p>
                     <span>Mengapa Literasi IT Menjadi Urgensitas?</span> Hal
                     paling mendasar yang melatarbelakangi pentingnya edukasi IT
                     adalah keamanan. Saat ini, kejahatan siber seperti
                     pencurian identitas, penipuan daring, dan penyebaran berita
                     bohong (hoaks) semakin marak terjadi. Masyarakat yang minim
                     pengetahuan teknologi cenderung menjadi sasaran empuk bagi
                     pelaku kejahatan ini. Dengan pemahaman IT yang baik,
                     seseorang tidak hanya tahu cara menggunakan aplikasi,
                     tetapi juga paham cara melindungi privasi data mereka dan
                     membedakan informasi yang valid dari yang manipulatif.
                  </p>

                  <p>
                     Selain faktor keamanan, pengetahuan IT adalah kunci utama
                     penggerak ekonomi. Kita melihat bagaimana pelaku UMKM yang
                     mulai memahami pemasaran digital dan sistem pembayaran
                     cashless mampu bertahan bahkan berkembang pesat.
                     Pengetahuan IT memberikan akses kepada masyarakat untuk
                     menjangkau pasar global yang sebelumnya tidak terbayangkan.
                     Tanpa literasi digital, kesenjangan ekonomi akan semakin
                     melebar antara mereka yang menguasai teknologi dan mereka
                     yang terisolasi oleh keterbatasan informasi.
                  </p>

                  <p>
                     Lebih jauh lagi, peningkatan kapasitas IT berkaitan erat
                     dengan masa depan lapangan kerja. Saat ini, hampir semua
                     profesi membutuhkan setidaknya kemampuan dasar komputer. Di
                     masa depan, kemampuan untuk bekerja berdampingan dengan
                     kecerdasan buatan (AI) dan otomatisasi akan menjadi standar
                     baru. Mengedukasi masyarakat mengenai IT sejak dini berarti
                     mempersiapkan generasi yang tidak hanya menjadi konsumen
                     teknologi, tetapi juga menjadi inovator yang mampu
                     menciptakan solusi bagi masalah di sekitarnya.
                  </p>

                  <p>
                     <span>Tantangan dan Langkah Kolaboratif</span> Meskipun
                     urgensinya jelas, proses edukasi ini menghadapi tantangan
                     besar, terutama masalah infrastruktur dan akses pendidikan.
                     Masih banyak daerah yang belum terjangkau internet stabil,
                     serta terbatasnya mentor atau pengajar IT yang kompeten di
                     lapangan. Oleh karena itu, diperlukan langkah nyata seperti
                     penyediaan pusat pelatihan komputer di tingkat desa,
                     penyederhanaan kurikulum teknologi bagi orang awam, serta
                     dukungan penuh dari penyedia layanan pelatihan IT swasta
                     untuk memberikan materi yang praktis dan aplikatif.
                  </p>

                  <p>
                     Sebagai kesimpulan, teknologi informasi adalah alat yang
                     sangat kuat, namun kekuatannya sangat bergantung pada siapa
                     yang memegangnya. Peningkatan pengetahuan IT di masyarakat
                     adalah investasi sosial yang akan memberikan hasil berlipat
                     ganda bagi kemajuan bangsa. Ketika setiap individu mampu
                     menggunakan teknologi secara bijak, aman, dan produktif,
                     maka visi Indonesia Digital bukan lagi sekadar impian,
                     melainkan realitas yang dapat kita nikmati bersama. Mari
                     kita berhenti merasa takut pada pembaruan teknologi dan
                     mulai membekali diri dengan pengetahuan, karena di era
                     digital, belajar adalah bentuk adaptasi yang paling kuat.
                  </p>
               </article>
            </section>
         </main>
         <Footer />
         <BrightGradientBackground />
      </>
   );
}
