import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Homme from "./components/pages/Homme";
import Femme from "./components/pages/Femme";
import Enfant from "./components/pages/Enfant";
import ProductDetail from "./components/pages/ProductDetail";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homme" element={<Homme />} />
        <Route path="/femme" element={<Femme />} />
        <Route path="/enfant" element={<Enfant />} />
        <Route path="/product/:id" element={<ProductDetail />} />

      </Routes>
    </Router>
  );
};

export default App;
