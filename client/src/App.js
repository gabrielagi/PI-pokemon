import { BrowserRouter, Route, Routes } from "react-router-dom"; // Asegúrate de importar BrowserRouter
import LandingPage from "./pages/LandingPage/LandingPage";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* {path !== "/" && <Navbar />} */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
