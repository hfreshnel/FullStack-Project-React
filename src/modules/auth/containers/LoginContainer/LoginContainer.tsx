import LoginForm from '../../forms/LoginForm/LoginForm.tsx';
import './LoginContainer.css';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import { Color } from '../../../../common/enums/Color.ts';
import { Link } from 'react-router-dom';

const LoginContainer = () => {
  return (
    <div className={'login-container'}>
      <LoginForm />
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
