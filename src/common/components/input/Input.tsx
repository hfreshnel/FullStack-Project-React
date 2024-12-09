import React from 'react';
import './Input.css';
import { InputType } from '../../utils/InputType';
import { Size } from '../../utils/Size';
import { Color } from '../../utils/Colors.tsx';

interface InputProps extends React.InputHTMLAttributes<HTMLElement> {
  label: string;
  type: InputType;
  placeholder?: string;
  bgColor: Color;
  textColor: string;
  inputSize: Size;
  value: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  bgColor,
  textColor,
  inputSize,
  value,
  ...props
}) => {
  return (
    <div
      className={`input-container bg-${bgColor} text-${textColor} size-${inputSize}`}
    >
      <label className='input-label'>{label}</label>
      <input
        {...props}
        className='input-field'
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
