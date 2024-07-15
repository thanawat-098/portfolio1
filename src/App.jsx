import "./App.css";
import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";
import Thanawat from "./Thanawat/Thanawat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Thanawat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
