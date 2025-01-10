import Input from '../../../../common/components/input/Input.tsx';
import { InputType } from '../../../../common/enums/InputType.ts';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import { Color } from '../../../../common/enums/Color.ts';
import './LoginForm.css';
import { useState } from 'react';
import { TLoginFormProps } from './types/TLoginFormProps.ts';

const LoginForm = ({ handleSignin }: TLoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await handleSignin({
      mail: email,
      mdp: password,
    });
  };
  return (
    <form className={'login-form'} onSubmit={handleSubmit}>
      <Input
        type={InputType.EMAIL}
        placeholder='Email'
        textColor={Color.BLUE}
        bgColor={Color.WHITE}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        type={InputType.PASSWORD}
        placeholder='Mot de passe'
        textColor={Color.BLUE}
        bgColor={Color.WHITE}
        onChange={e => setPassword(e.target.value)}
      />
      <TextButton
        label='Se connecter'
        bgColor={Color.BLUE}
        textColor={Color.WHITE}
        className={'login-button'}
        type={'submit'}
      />
    </form>
  );
};

export default LoginForm;
