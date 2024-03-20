import "./App.css";
import AboutPage from "./components/AboutPage/AboutPage";
import MainPage from "./components/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainPage />} path={"/"} />
          <Route element={<AboutPage />} path={"/about"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
