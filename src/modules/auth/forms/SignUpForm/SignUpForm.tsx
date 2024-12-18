import React, { useEffect, useState } from 'react';
import Input from '../../../../common/components/input/Input.tsx';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import Toast from '../../../../common/components/toast/Toast.tsx';
import { Color } from '../../../../common/enums/Color.ts';
import { InputType } from '../../../../common/enums/InputType.ts';
import './SignUpForm.css';
import { TSignUpFormProps } from './types/TSignUpFormProps.ts';

const SignUpForm = ({ handleSignup, handleError }: TSignUpFormProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      handleError('Les mots de passe ne correspondent pas');
      return;
    }

    await handleSignup({
      mail: email,
      mdp: password,
      prenom: firstName,
      nom: lastName,
    });
  };

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
    </form>
  );
};

export default SignUpForm;
