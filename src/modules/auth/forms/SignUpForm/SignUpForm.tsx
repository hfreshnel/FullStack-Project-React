import { TSignupRequest } from '../../../../common/services/auth/types/requests/TSignupRequest.ts';
import Input from '../../../../common/components/input/Input.tsx';
import { InputType } from '../../../../common/enums/InputType.ts';
import { Color } from '../../../../common/enums/Color.ts';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import './SignUpForm.css';
import React, { useState, useEffect } from 'react';
import Toast from '../../../../common/components/toast/Toast.tsx';

interface SignUpFormProps {
  handleSignUp: (data: TSignupRequest) => Promise<void>;
}

const SignUpForm = ({ handleSignUp }: SignUpFormProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
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

    try {
      const response = await fetch(
        'http://10.3.70.1:8000/public/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mail: email,
            mdp: password,
            prenom: firstName,
            nom: lastName,
          }),
        },
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        setError(errorResponse.message || 'Erreur lors de l’inscription.');
        setErrorKey(prevKey => prevKey + 1);
        return;
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
      setErrorKey(prevKey => prevKey + 1);
    }
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
