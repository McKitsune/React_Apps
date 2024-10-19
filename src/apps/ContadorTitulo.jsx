import React, { useState, useEffect } from 'react';
import { RiAddCircleFill } from 'react-icons/ri';
import { GrFormSubtract } from 'react-icons/gr';

const Contador = ({ isDarkMode, toggleDarkMode }) => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleIncrement = () => {
    setCount(count + 1);
    setMessage('Va sumando');
  };

  const handleDecrement = () => {
    setCount(count - 1);
    setMessage('Va de resta');
  };

  return (
    <div
      className="contador-container"
      style={{
        margin: "20px auto",
        width: "80%",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
        padding: "30px",
        borderRadius: "30px",
        height: "350px", // Altura mínima de 150px
        
        background: "transparent" // Fondo completamente transparente
      }}
    >
      <h1>Contador: {count}</h1>
      <div className="button-container">
        <button className="icon-button" onClick={handleDecrement}>
          <GrFormSubtract />
        </button>
        <button className="icon-button" onClick={handleIncrement}>
          <RiAddCircleFill />
        </button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Contador;
