import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../layout/Body";
import Home from "../pages/Home";
import BranchDetails from "../pages/BranchDetails";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Home />} />
            <Route path="/ramos/:branch" element={<BranchDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
