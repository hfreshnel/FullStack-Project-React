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

const TextButton: React.FC<MainButtonProps> = ({
  label,
  bgColor = Color.BLUE,
  textColor = Color.WHITE,
  borderColor = Color.WHITE,
  btnSize = Size.MEDIUM,
  disabled = false,
  ...props
}) => {
  let classes = 'text-button ';
  classes += btnSize && ` size-${btnSize} `;
  if (disabled) {
    classes += 'disabled ';
  } else {
    classes += bgColor && `bg-${bgColor} `;
    classes += textColor && `text-${textColor} `;
    classes += borderColor && `border-${borderColor} `;
  }

  return (
    <button {...props} className={classes}>
      {label}
    </button>
  );
};

export default TextButton;
