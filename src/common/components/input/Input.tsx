import React from 'react';
import './Input.css';
import { InputType } from '../../utils/InputType';
import { Size } from '../../utils/Size';

interface InputProps {
  label: string;
  type: InputType;
  placeholder?: string;
  bgColor: string;
  textColor: string;
  inputSize: Size;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Gestion de l'événement
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  bgColor,
  textColor,
  inputSize,
  value,
  onChange,
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
        onChange={onChange} // Ajout de l'événement onChange
      />
    </div>
  );
};

export default Input;
