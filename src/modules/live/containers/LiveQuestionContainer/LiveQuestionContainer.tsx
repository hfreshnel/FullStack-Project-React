import MainMenu from '../../../../common/components/main-menu/mainMenu.tsx';
import './LiveQuestionContainer.css';

const LiveQuestionContainer = () => {
  return (
    <div className={'quiz-create-container'}>
      <MainMenu />
      <div className={'quiz-create-container-content'}>
        This is Live Question container
      </div>
    </div>
  );
};

export default LiveQuestionContainer;
