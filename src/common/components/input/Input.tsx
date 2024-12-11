import React from 'react';
import './Input.css';
import { Size } from '../../enums/Size.ts';
import { Color } from '../../enums/Color.ts';

interface InputProps extends React.InputHTMLAttributes<HTMLElement> {
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
  ...props
}: InputProps) => {
  let classes = 'input-field ';
  classes += bgColor ? `bg-${bgColor} ` : '';
  classes += textColor ? `text-${textColor} ` : '';
  classes += inputSize ? `size-${inputSize} ` : '';
  classes += borderColor ? `border-${borderColor} ` : '';

  return <input {...props} className={classes} placeholder={placeholder} />;
};

export default Input;
