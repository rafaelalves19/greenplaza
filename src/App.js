import "../src/styles/scss/index.scss";

import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Home from "./pages/home";
import Privacy from "./pages/privacy";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
