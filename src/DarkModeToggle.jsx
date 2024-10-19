import { useState } from 'react';
import { IoCloudyNightOutline, IoCloudyNightSharp } from "react-icons/io5";

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <div className="mode-toggle-container" onClick={toggleDarkMode}>
            <div className="mode-toggle">
                {isDarkMode ? <IoCloudyNightOutline size={24} /> : <IoCloudyNightSharp size={24} />}
            </div>
        </div>
    );
};

export default DarkModeToggle;