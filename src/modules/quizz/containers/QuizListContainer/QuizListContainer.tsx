import MainMenu from '../../../../common/components/main-menu/mainMenu.tsx';
import './QuizListContainer.css';

const QuizListContainer = () => {
  return (
    <div className={'quiz-list-container'}>
      <MainMenu />
      <div className={'quiz-list-container-content'}>
        This is Quiz List container
      </div>
    </div>
  );
};

export default QuizListContainer;
