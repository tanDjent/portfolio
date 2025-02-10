import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="flex h-[100vh] w-[100vw]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
