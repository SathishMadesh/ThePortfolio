import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect } from 'react';

// AOS
import aos from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        aos.init({duration:1200})
    })
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/:user" element={<Home />} /> */}
        </Routes>
    </Router>
    );
}

export default App;
