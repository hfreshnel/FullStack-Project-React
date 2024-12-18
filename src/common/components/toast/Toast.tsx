import React, { useEffect, useState } from 'react';
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
  duration?: number; // Durée en secondes avant disparition
}

const Toast = ({
  label,
  borderColor,
  bgColor,
  visible,
  textColor,
  cardSize,
  duration = 2, 
  ...props
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(visible);

  useEffect(() => {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration * 1000); // Convertir en millisecondes

      return () => clearTimeout(timer);
  }, [visible, duration]);

  return (
    <div className={`toast-container ${!isVisible ? 'hidden' : ''}`}>
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
