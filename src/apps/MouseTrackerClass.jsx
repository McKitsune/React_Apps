import React, { useState } from 'react';
import '../App.css'; // Asegúrate de que la ruta sea correcta

const MouseTracker = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        setPosition({ x: clientX, y: clientY });
    };

    const handleMouseLeave = () => {
        // Reiniciar la posición al salir del contenedor
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            className="mouse-tracker-container"
            onMouseMove={handleMouseMove} // Captura el movimiento del ratón solo dentro del contenedor
            onMouseLeave={handleMouseLeave} // Reinicia la posición al salir
        >
            <h1>Posición del ratón</h1>
            <p>x: {position.x}</p>
            <p>y: {position.y}</p>
        </div>
    );
};

export default MouseTracker;
