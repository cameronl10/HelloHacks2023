import './App.css';
import Login from './pages/StartMenu.js'
import SignUp from './pages/SignUp.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup/" element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
