import './App.css';
import Login from './pages/StartMenu.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup/" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
