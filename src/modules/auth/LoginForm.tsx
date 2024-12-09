import TextButton from '../../common/components/text-button/TextButton.tsx';
import { Color } from '../../common/utils/Color.tsx';
import { Size } from '../../common/utils/Size.tsx';

export default function LoginForm() {
  return (
    <TextButton
      label='Se connecter'
      bgColor={Color.RED}
      textColor={Color.WHITE}
      btnSize={Size.LARGE}
    />
  );
}
