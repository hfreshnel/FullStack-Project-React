import React from 'react';
import './TextButton.css';
import { Size } from '../../enums/Size.ts';
import { Color } from '../../enums/Color.ts';

interface MainButtonProps {
  label: string;
  bgColor: Color;
  textColor: Color;
  btnSize: Size;
}

const TextButton: React.FC<MainButtonProps> = ({
  label,
  bgColor,
  textColor,
  btnSize,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`text-button bg-${bgColor} text-${textColor} size-${btnSize}`}
    >
      {label}
    </button>
  );
};

export default TextButton;
