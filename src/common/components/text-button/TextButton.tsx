import React from 'react';
import './TextButton.css';
import { Color } from '../../enums/Color.ts';
import { Size } from '../../enums/Size.ts';

interface MainButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  bgColor?: Color;
  textColor?: Color;
  borderColor?: Color;
  btnSize?: Size;
  disabled?: boolean;
}

const TextButton = ({
  label,
  bgColor,
  textColor,
  borderColor,
  btnSize = Size.LARGE,
  disabled = false,
  ...props
}: MainButtonProps) => {
  let classes = props.className
    ? props.className + ' text-button '
    : 'text-button ';
  classes += btnSize ? ` size-${btnSize} ` : '';
  classes += bgColor ? `bg-${bgColor} ` : '';
  classes += textColor ? `text-${textColor} ` : '';
  classes += borderColor ? `border-${borderColor} ` : '';
  classes += disabled ? 'disabled ' : '';

  return (
    <button {...props} className={classes} disabled={disabled}>
      {label}
    </button>
  );
};

export default TextButton;
