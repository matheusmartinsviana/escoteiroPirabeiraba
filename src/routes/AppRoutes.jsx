import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../layout/Body";
import Home from "../pages/Home";
import Escoteiro from "../pages/branches/Escoteiro";
import Senior from "../pages/branches/Senior";
import Pioneiro from "../pages/branches/Pioneiro";
import Lobinho from "../pages/branches/Lobinho";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Home />} />
            <Route path="/ramos/escoteiro" element={<Escoteiro />} />
            <Route path="/ramos/senior" element={<Senior />} />
            <Route path="/ramos/pioneiro" element={<Pioneiro />} />
            <Route path="/ramos/lobinho" element={<Lobinho />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
