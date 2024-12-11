import React from 'react';
import './Input.css';
import { Size } from '../../enums/Size.ts';
import { Color } from '../../enums/Color.ts';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  bgColor?: Color;
  textColor?: Color;
  inputSize?: Size;
  borderColor?: Color;
}

const Input = ({
  placeholder,
  bgColor,
  textColor,
  borderColor,
  inputSize = Size.LARGE,
  disabled = false,
  ...props
}: InputProps) => {
  let classes = props.className
    ? props.className + ' input-field '
    : 'input-field ';
  classes += inputSize ? ` size-${inputSize} ` : '';
  classes += bgColor ? `bg-${bgColor} ` : '';
  classes += textColor ? `text-${textColor} ` : '';
  classes += borderColor ? `border-${borderColor} ` : '';
  classes += disabled ? 'disabled ' : '';

  return (
    <input
      {...props}
      className={classes}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default Input;
