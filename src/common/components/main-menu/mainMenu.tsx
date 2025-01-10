import './mainMenu.css';
import Divider from '../divider/divider.tsx';
import IconButton from '../icon-button/IconButton.tsx';
import logo from '../../assets/logo.png';
import {
  faCircleQuestion,
  faPlus,
  faRightFromBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Color } from '../../enums/Color.ts';
import { Link } from 'react-router-dom';

export default function MainMenu() {
  const isAdmin = false;
  return (
    <div className='main-menu'>
      <div className='main-menu-header'>
        <img src={logo} alt={'Logo ESIGELEC'} />
      </div>
      <Divider direction='horizontal' />
      <div className='main-menu-content'>
        <Link to={'/profile'}>
          <IconButton
            icon={faUser}
            bgColor={Color.WHITE}
            tooltip={'Mon profil'}
            className={'main-menu-button'}
          />
        </Link>
        <Link to='/list/quiz'>
          <IconButton
            icon={faCircleQuestion}
            bgColor={Color.WHITE}
            tooltip={'Liste des quiz'}
            className={'main-menu-button'}
          />
        </Link>
        {isAdmin && (
          <Link to='/create/quiz'>
            <IconButton
              icon={faPlus}
              bgColor={Color.WHITE}
              tooltip={"Création d'un quiz"}
              className={'main-menu-button'}
            />
          </Link>
        )}
      </div>
      <Divider direction='horizontal' />
      <Link to='/auth/login'>
        <IconButton
          icon={faRightFromBracket}
          bgColor={Color.WHITE}
          iconColor={Color.RED}
          tooltip={'Déconnexion'}
          className={'logout-button'}
          onClick={() => {
            localStorage.removeItem('authToken');
            localStorage.removeItem('role');
          }}
        />
      </Link>
    </div>
  );
}
