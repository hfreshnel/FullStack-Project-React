import MainMenu from '../../../../common/components/main-menu/mainMenu.tsx';
import './QuestionListContainer.css';

const QuestionListContainer = () => {
  return (
    <div className={'question-list-container'}>
      <MainMenu />
      <div className={'question-list-container-content'}>
        This is Question List container
      </div>
    </div>
  );
};

export default QuestionListContainer;
