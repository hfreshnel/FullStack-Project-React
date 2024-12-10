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

const MainCard: React.FC<MainCardProps> = ({
  label,
  borderColor,
  bgColor,
  textColor = Color.BLUE,
  cardSize = Size.LARGE,
  ...props
}) => {
  let classes = 'main-card ';
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
