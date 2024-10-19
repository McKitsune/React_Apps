import { useState } from 'react';
import Logo from './assets/Kitsune.svg';
import DarkModeToggle from './DarkModeToggle';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Talleres from './Talleres';

function Home({ isDarkMode, toggleDarkMode }) {
    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <div className="container">
                <div>
                    <Link to="/talleres" rel="noopener noreferrer">
                        <img className="logo" src={Logo} alt="Logo de Kitsune" />
                    </Link>
                </div>
                <h1>Welcome to BootCamp <br /> DWFS</h1>
                <div className="card">
                    <p>Aquí encontrarás todas las actividades</p>
                </div>
                <p className="read-the-docs">Click en el logo para ver más!</p>
                <DarkModeToggle 
                    isDarkMode={isDarkMode} 
                    toggleDarkMode={toggleDarkMode} 
                />
            </div>
        </div>
    );
}

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <Router>
            <Routes>
                <Route 
                    path="/" 
                    element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} 
                />
                <Route 
                    path="/talleres" 
                    element={<Talleres isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} 
                />
            </Routes>
        </Router>
    );
}

export default App;
