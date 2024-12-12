import './divider.css';

interface DividerProps {
  direction?: 'horizontal' | 'vertical';
}

export default function Divider({ direction = 'horizontal' }: DividerProps) {
  return <div className={`divider ${direction}`}></div>;
}
