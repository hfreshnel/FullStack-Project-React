import React from 'react';
import './MainCard.css';
import { Color } from '../../enums/Color.ts';
import { Size } from '../../enums/Size.ts';

interface MainCardProps extends React.HTMLAttributes<HTMLElement> {
  label: string;
  borderColor?: Color;
  bgColor?: Color;
  textColor?: Color;
  cardSize?: Size;
}

const MainCard = ({
  label,
  borderColor,
  bgColor,
  textColor = Color.BLUE,
  cardSize = Size.LARGE,
  ...props
}: MainCardProps) => {
  let classes = props.className
    ? props.className + ' main-card '
    : 'main-card ';
  classes += bgColor ? `bg-${bgColor} ` : '';
  classes += textColor ? `text-${textColor} ` : '';
  classes += cardSize ? `size-${cardSize} ` : '';
  classes += borderColor ? `border-${borderColor} ` : '';

  return (
    <div {...props} className={classes}>
      {label}
    </div>
  );
};

export default MainCard;
