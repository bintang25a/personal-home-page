import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Games from "./pages/Games";
import ItTrain from "./pages/portfolio/it-train";

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<PublicLayout />}>
               <Route index element={<Home />} />
               <Route path="blogs" element={<Blogs />} />
               <Route path="games" element={<Games />} />
            </Route>

            <Route path="portfolio/it-train" element={<ItTrain />}></Route>
         </Routes>
      </BrowserRouter>
   );
}
