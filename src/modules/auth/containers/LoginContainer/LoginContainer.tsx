import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import Toast from '../../../../common/components/toast/Toast.tsx';
import { Color } from '../../../../common/enums/Color.ts';
import LoginForm from '../../forms/LoginForm/LoginForm.tsx';
import './LoginContainer.css';

const LoginContainer = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastErrorMessage, setToastErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook pour la navigation

  const handleSignin = async (data: { mail: string; mdp: string }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/public/auth/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      if (response.ok) {
        const token = result.data?.token;
        const role = result.data?.role;
        if (token) {
          // Stocker le token dans le localStorage
          localStorage.setItem('authToken', token);
          localStorage.setItem('role', role);
          console.log('Login réussi. Token stocké dans le local storage.');

          // Redirection vers /list/quiz
          navigate('/list/quiz');
        }
      } else {
        // Gestion des erreurs retournées par l'API
        setToastErrorMessage(
          result.error || 'Erreur inconnue lors de la connexion',
        );
        setToastVisible(true);
      }
    } catch (error) {
      // Gestion des erreurs réseau ou autres
      setToastErrorMessage('Une erreur est survenue. Veuillez réessayer.');
      setToastVisible(true);
      console.error('Erreur:', error);
    } finally {
      // Masquer le toast après quelques secondes
      setTimeout(() => setToastVisible(false), 5000);
    }
  };

  return (
    <div className={'login-container'}>
      {toastVisible && toastErrorMessage && (
        <Toast
          label={toastErrorMessage}
          bgColor={Color.RED}
          textColor={Color.WHITE}
          visible={toastVisible}
        />
      )}
      <LoginForm handleSignin={handleSignin} />
      <Link to='/auth/signup' className='register-link'>
        <TextButton
          label="S'inscrire"
          bgColor={Color.BLUE}
          textColor={Color.WHITE}
        />
      </Link>
    </div>
  );
};

export default LoginContainer;
