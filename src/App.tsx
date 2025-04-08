import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import TanDjent from "./containers/TanDjent/TanDjent";

import "./App.css";

function App() {
  return (
    <div className="flex h-[100vh] w-[100vw]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tanDjent" element={<TanDjent />} />
      </Routes>
    </div>
  );
}

export default App;
