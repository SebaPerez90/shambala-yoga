import "./styles/global.css";

import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import MyTurns from "./views/MyTurns";
import Home from "./views/Home";
import Loguin from "./views/Loguin";
import About from "./views/About";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Loguin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/turns" element={<MyTurns />} />
        <Route path="/loguin" element={<Loguin />} />
      </Routes>
    </>
  );
};

export default App;
