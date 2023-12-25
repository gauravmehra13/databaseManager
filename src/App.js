import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavigationBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DataTable from "./components/DataTable";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <NavigationBar styleMode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route
          path="/"
          element={<LandingPage styleMode={mode} toggleMode={toggleMode} />}
        ></Route>
        <Route path="/edit/:id" element={<EditPage />}></Route>
        <Route path="/add" element={<AddPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
