import React from 'react';
import './EmailInput.css';

interface EmailInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className='email-input-container'>
      <label className='email-input-label'>{label}</label>
      <input
        type='email'
        className='email-input-field'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default EmailInput;
