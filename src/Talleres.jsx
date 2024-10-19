import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import GestorTareas from './apps/GestorTareas';
import Contador from './apps/ContadorTitulo'; 
import MouseTrackerClass from './apps/MouseTrackerClass';
import MouseTrackerHook from './apps/MouseTrackerHook'

const Talleres = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <h2>Talleres</h2>
            <p>Bienvenido a la página de talleres. Aquí encontrarás información sobre los talleres disponibles.</p>

            
            {/* Agrega el botón de modo oscuro */}
            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

            {/* Aquí se muestra el componente GestorTareas */}
            <GestorTareas />

            {/* Aquí se muestra el componente ContadorTitulo */}
            <Contador />

            {/* Aquí se muestra el componente MouseTrackerClass */}
            <MouseTrackerClass />

            {/* Aquí se muestra el componente MouseTrackerHook */}
            <MouseTrackerHook />

        </div>
    );
};

export default Talleres;
