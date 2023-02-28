import { Navbar } from "../../ui/Components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import MarvelPage from "../pages/MarvelPage";
import DcPage from "../pages/DcPage";
import HeroPage from "../pages/HeroPage";
import SearchPage from "../pages/SearchPage";

const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DcPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/hero/:heroId" element={<HeroPage />} />
        </Routes>
      </div>
    </>
  );
};

export default HeroesRoutes;
