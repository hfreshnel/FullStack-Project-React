import MainMenu from '../../../../common/components/main-menu/mainMenu.tsx';
import './ProfileContainer.css';

function ProfileContainer() {
  return (
    <div className={'profile-container'}>
      <MainMenu />
      <div className={'profile-container-content'}>
        This is Profile container
      </div>
    </div>
  );
}

export default ProfileContainer;
