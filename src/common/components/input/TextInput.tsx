import React from 'react';
import './TextInput.css';

interface TextInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className='text-input-container'>
      <label className='text-input-label'>{label}</label>
      <input
        type='text'
        className='text-input-field'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
