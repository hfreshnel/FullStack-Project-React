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
  tooltip?: string;
}

const IconButton = ({
  icon,
  bgColor,
  iconColor = Color.BLUE,
  btnSize = Size.LARGE,
  borderColor,
  disabled = false,
  tooltip,
  ...props
}: IconButtonProps) => {
  let classes = props.className
    ? props.className + ' icon-button '
    : 'icon-button ';
  classes += btnSize ? ` size-${btnSize} ` : '';
  classes += bgColor ? `bg-${bgColor} ` : '';
  classes += iconColor ? `text-${iconColor} ` : '';
  classes += borderColor ? `border-${borderColor} ` : '';
  classes += disabled ? 'disabled ' : '';

  return (
    <button {...props} className={classes} disabled={disabled}>
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      {tooltip && <span className='tooltip'>{tooltip}</span>}
    </button>
  );
};

export default IconButton;
