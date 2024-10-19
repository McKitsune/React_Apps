import React, { useState } from 'react';
import '../App.css'; // Asegúrate de que la ruta sea correcta

const MouseTrackerHook = () => {
    const [lineStart, setLineStart] = useState({ x: 0, y: 0 });
    const [lineEnd, setLineEnd] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const container = event.currentTarget;
        const { left, top } = container.getBoundingClientRect();
        const x = event.clientX - left;
        const y = event.clientY - top;

        // Actualiza la posición de la línea
        setLineStart({ x: lineEnd.x, y: lineEnd.y }); // Punto de inicio en la última posición
        setLineEnd({ x, y });
    };

    

    const handleMouseLeave = () => {
        setLineStart({ x: 0, y: 0 });
        setLineEnd({ x: 0, y: 0 });
    };

    return (
        <div
            className="mouse-tracker-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative', height: '300px', overflow: 'hidden', border: '1px solid #ccc' }} // Añade borde para visualizar el contenedor
        >
            <h1>Seguir el Mouse</h1>
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <line
                    x1={lineStart.x}
                    y1={lineStart.y}
                    x2={lineEnd.x}
                    y2={lineEnd.y}
                    stroke="#38bdf8"
                    strokeWidth="3"
                />
            </svg>
            <p>x: {lineEnd.x}</p>
            <p>y: {lineEnd.y}</p>
        </div>
    );
};

export default MouseTrackerHook;
