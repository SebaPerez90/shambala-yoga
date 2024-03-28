import "./styles/global.css";

import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Turns from "./views/Turns";
import Home from "./views/Home";
import Loguin from "./views/Loguin";
import About from "./views/About";

const App = () => {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Loguin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/turns" element={<Turns />} />
      </Routes>
    </main>
  );
};

export default App;
