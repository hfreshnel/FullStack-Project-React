import React from 'react';
import './Input.css';
import { Size } from '../../enums/Size.ts';
import { Color } from '../../enums/Color.ts';

interface InputProps extends React.InputHTMLAttributes<HTMLElement> {
  placeholder?: string;
  bgColor: Color;
  textColor: Color;
  inputSize: Size;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  bgColor,
  textColor,
  inputSize,
  ...props
}) => {
  return (
    <input
      {...props}
      className={`input-field bg-${bgColor} text-${textColor} size-${inputSize}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
