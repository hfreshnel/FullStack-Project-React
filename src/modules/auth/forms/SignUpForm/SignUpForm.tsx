import { TSignupRequest } from '../../../../common/services/auth/types/requests/TSignupRequest.ts';
import Input from '../../../../common/components/input/Input.tsx';
import { InputType } from '../../../../common/enums/InputType.ts';
import { Color } from '../../../../common/enums/Color.ts';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import './SignUpForm.css';
import React, { useState, useEffect } from 'react';
import Toast from '../../../../common/components/toast/Toast.tsx';
import { TSignUpFormProps } from './types/TSignUpFormProps.ts';

const SignUpForm = ({ handleSignup,errorMessage }: TSignUpFormProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(errorMessage);
  const [visible, setVisible] = useState(false);
  const [errorKey, setErrorKey] = useState(0);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      setErrorKey(prevKey => prevKey + 1);
      return;
    }
    handleSignup({});
  };

  useEffect(() => {
    if (error) {
      setVisible(true);
      const timeout = setTimeout(() => {
        setVisible(false);
        setTimeout(() => setError(null), 500);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [error]);

  return (
    <form className='register-form' onSubmit={handleSubmit}>
      <Input
        type={InputType.TEXT}
        placeholder='Nom'
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        textColor={Color.BLUE}
        bgColor={Color.WHITE}
      />
      <Input
        type={InputType.TEXT}
        placeholder='Prénom'
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        textColor={Color.BLUE}
        bgColor={Color.WHITE}
      />
      <Input
        type={InputType.EMAIL}
        placeholder='Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        textColor={Color.BLUE}
        bgColor={Color.WHITE}
      />
      <Input
        type={InputType.PASSWORD}
        placeholder='Mot de passe'
        value={password}
        onChange={e => setPassword(e.target.value)}
        textColor={Color.BLUE}
        bgColor={Color.WHITE}
      />
      <Input
        type={InputType.PASSWORD}
        placeholder='Confirmation du mot de passe'
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        textColor={Color.BLUE}
        bgColor={Color.WHITE}
      />
      <TextButton
        type='submit'
        label="S'inscrire"
        bgColor={Color.BLUE}
        textColor={Color.WHITE}
        className={'register-button'}
      />
      {error && (
        <Toast
          label={error}
          visible={visible}
          bgColor={Color.RED}
          textColor={Color.WHITE}
        />
      )}
    </form>
  );
};

export default SignUpForm;
