import MainMenu from '../../../../common/components/main-menu/mainMenu.tsx';
import './QuizCreateContainer.css';
import Chart from '../../../../common/components/charts/Chart.tsx';

const QuizCreateContainer = () => {
  return (
    <div className={'quiz-create-container'}>
      <MainMenu />
      <div className={'quiz-create-container-content'}>
        This is Quiz Create container
      </div>
    </div>
  );
};

export default QuizCreateContainer;
