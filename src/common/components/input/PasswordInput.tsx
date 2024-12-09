import React from 'react';
import './PasswordInput.css';

interface PasswordInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className='password-input-container'>
      <label className='password-input-label'>{label}</label>
      <input
        type='password'
        className='password-input-field'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PasswordInput;
