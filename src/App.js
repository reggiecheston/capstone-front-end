import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/logIn";
import Admin from "./pages/admin";
import Dev from "./pages/dev";
import Staff from "./pages/staff";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/dev" element={<Dev />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
