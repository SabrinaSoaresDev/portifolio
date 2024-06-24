import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Contato from "../Pages/Contato";

function RouteApp() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
  );
}

export default RouteApp;