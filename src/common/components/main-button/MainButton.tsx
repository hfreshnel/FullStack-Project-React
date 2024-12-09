import React from 'react';
import './MainButton.css';

interface MainButtonProps {
  label: string;
}

const MainButton: React.FC<MainButtonProps> = ({ label, ...props }) => {
  return (
    <button {...props} className='main-button'>
      {label}
    </button>
  );
};

export default MainButton;
