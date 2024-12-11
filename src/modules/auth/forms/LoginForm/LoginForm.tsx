import Input from '../../../../common/components/input/Input.tsx';
import { InputType } from '../../../../common/enums/InputType.ts';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import { Color } from '../../../../common/enums/Color.ts';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className={'login-container'}>
      <form className={'login-form'}>
        <Input
          type={InputType.EMAIL}
          placeholder='Email'
          textColor={Color.BLUE}
          bgColor={Color.WHITE}
        />
        <Input
          type={InputType.PASSWORD}
          placeholder='Mot de passe'
          textColor={Color.BLUE}
          bgColor={Color.WHITE}
        />
        <TextButton
          label='Se connecter'
          bgColor={Color.BLUE}
          textColor={Color.WHITE}
          className={'login-button'}
        />
        <TextButton
          label="S'inscrire"
          bgColor={Color.BLUE}
          textColor={Color.WHITE}
        />
      </form>
    </div>
  );
};

export default LoginForm;
