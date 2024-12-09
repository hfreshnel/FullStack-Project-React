import React from 'react';
import './MainButton.css';

interface MainButtonProps {
  label: string;
  color: string;
}

const MainButton: React.FC<MainButtonProps> = ({ label, color, ...props }) => {
  return (
    <button {...props} className={`main-button ${color}`}>
      {label}
    </button>
  );
};

export default MainButton;
