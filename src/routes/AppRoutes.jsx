import { BrowserRouter, Route, Routes } from "react-router-dom";
import Escoteiro from "../pages/Branches/Escoteiro";
import Pioneiro from "../pages/Branches/Pioneiro";
import Lobinho from "../pages/Branches/Lobinho";
import Senior from "../pages/Branches/Senior";
import Body from "../layout/Body";
import Home from "../pages/Home";
import Events from "../pages/Events";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Home />} />
            <Route path="/eventos" element={<Events />} />
            <Route path="/ramos/escoteiro" element={<Escoteiro />} />
            <Route path="/ramos/pioneiro" element={<Pioneiro />} />
            <Route path="/ramos/lobinho" element={<Lobinho />} />
            <Route path="/ramos/senior" element={<Senior />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
