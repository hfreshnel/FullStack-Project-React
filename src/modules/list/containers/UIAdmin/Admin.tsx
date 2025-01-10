import { faChartSimple, faPercent } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import LineBarChart from '../../../../common/components/charts/Chart.tsx';
import IconButton from '../../../../common/components/icon-button/IconButton.tsx';
import MainCard from '../../../../common/components/main-card/MainCard.tsx';
import MainMenu from '../../../../common/components/main-menu/mainMenu.tsx';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import { Color } from '../../../../common/enums/Color.ts';
import { Size } from '../../../../common/enums/Size.ts';
import './Admin.css';

const Admin = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [isChartVisible, setIsChartVisible] = useState(false);
  const [showPercentages, setShowPercentages] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleChartClick = () => {
    setIsChartVisible(prev => !prev);
    setShowPercentages(false);
  };

  const handlePercentageClick = () => {
    setShowPercentages(prev => !prev);
    setIsChartVisible(false);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(prev => prev + 1);
    setSelectedAnswer(null);
    setIsChartVisible(false);
    setShowPercentages(false);
    setTimeLeft(30);
    setIsTimeUp(false);
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsTimeUp(true);
    }
  }, [timeLeft]);

  const answerPercentages = [25, 35, 20, 20];

  return (
    <div className={'quiz-create-container'}>
      <MainMenu />
      <div className={'quiz-create-container-content'}>
        <MainCard className='quiz' label={`Nom de quiz`} />
        <MainCard
          className='titre'
          label={`Question ${currentQuestion}:`}
          bgColor={Color.WHITE}
          borderColor={Color.BLUE}
          cardSize={Size.LARGE}
        />
      </div>
      <div className='timer'>Temps restant : {timeLeft}s</div>

      {!isChartVisible && (
        <div className='reposes-container'>
          {['Repose1', 'Repose2', 'Repose3', 'Repose4'].map((answer, index) => (
            <TextButton
              key={answer}
              className={`${answer} ${selectedAnswer === answer ? 'selected' : ''}`}
              label={`${answer} ${showPercentages ? `(${answerPercentages[index]}%)` : ''}`}
              bgColor={selectedAnswer === answer ? Color.BLUE : Color.WHITE}
              borderColor={Color.BLUE}
              btnSize={Size.SMALL}
              textColor={selectedAnswer === answer ? Color.WHITE : Color.BLUE}
              onClick={() => handleAnswerClick(answer)}
            />
          ))}
        </div>
      )}

      {isChartVisible && (
        <div className='chart-container'>
          <LineBarChart
            seriesData={[20, 40, 30, 10]}
            seriesAnswers={['Reponse 1', 'Reponse 2', 'Reponse 3', 'Reponse 4']}
          />
        </div>
      )}

      <div className='button'>
        <IconButton
          icon={faChartSimple}
          bgColor={Color.TRANSPARENT}
          iconColor={Color.BLUE}
          borderColor={Color.TRANSPARENT}
          tooltip={'Histogramme'}
          className={'histogramme'}
          onClick={handleChartClick}
        />
        <TextButton
          className='terminer'
          label={'question suivante'}
          bgColor={Color.BLUE}
          borderColor={Color.BLUE}
          btnSize={Size.SMALL}
          textColor={Color.WHITE}
          onClick={handleNextQuestion}
        />
        <IconButton
          icon={faPercent}
          bgColor={Color.TRANSPARENT}
          iconColor={Color.BLUE}
          borderColor={Color.TRANSPARENT}
          tooltip={'Pourcentage'}
          className={'pourcentage'}
          onClick={handlePercentageClick}
        />
      </div>
    </div>
  );
};

export default Admin;
