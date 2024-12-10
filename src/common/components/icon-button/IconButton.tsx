import React from 'react';
import './IconButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Color } from '../../enums/Color.ts';
import { Size } from '../../enums/Size.ts';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconProp;
  bgColor?: Color;
  iconColor?: Color;
  btnSize?: Size;
  borderColor?: Color;
  disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  bgColor,
  iconColor = Color.BLUE,
  btnSize = Size.LARGE,
  borderColor,
  disabled = false,
  ...props
}) => {
  let classes = 'icon-button ';
  classes += btnSize && ` size-${btnSize} `;
  if (disabled) {
    classes += 'disabled ';
  } else {
    classes += bgColor && `bg-${bgColor} `;
    classes += iconColor && `text-${iconColor} `;
    classes += borderColor && `border-${borderColor} `;
  }

  return (
    <button {...props} className={classes}>
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
    </button>
  );
};

export default IconButton;
