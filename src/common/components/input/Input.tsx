import React from 'react';
import './Input.css';
import { Size } from '../../utils/Size';
import { Color } from '../../utils/Colors.tsx';

interface InputProps extends React.InputHTMLAttributes<HTMLElement> {
  label: string;
  placeholder?: string;
  bgColor: Color;
  textColor: Color;
  inputSize: Size;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  bgColor,
  textColor,
  inputSize,
  ...props
}) => {
  return (
    <div
      className={`input-container bg-${bgColor} text-${textColor} size-${inputSize}`}
    >
      <input
        {...props}
        className={`input-field bg-${bgColor} text-${textColor} size-${inputSize}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
