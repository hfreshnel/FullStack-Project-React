import React from 'react';
import './Toast.css';
import { Color } from '../../enums/Color.ts';
import { Size } from '../../enums/Size.ts';
import MainCard from '../main-card/MainCard.tsx';

interface ToastProps extends React.HTMLAttributes<HTMLElement> {
  label: string;
  error?: string;
  visible?: boolean;
  borderColor?: Color;
  bgColor?: Color;
  textColor?: Color;
  cardSize?: Size;
}

const Toast = ({
  label,
  borderColor,
  bgColor,
  visible,
  textColor,
  cardSize,
  ...props
}: ToastProps) => {
  return (
    <div className={`toast-container ${!visible ? 'hidden' : ''}`}>
      <MainCard
        label={label}
        borderColor={borderColor}
        bgColor={bgColor}
        textColor={textColor}
        cardSize={cardSize}
        className={'toast'}
        {...props}
      />
    </div>
  );
};

export default Toast;
