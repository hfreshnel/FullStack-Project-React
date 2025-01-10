import { useEffect, useState } from 'react';
import MainCard from '../../../../common/components/main-card/MainCard.tsx';
import MainMenu from '../../../../common/components/main-menu/mainMenu.tsx';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import { Color } from '../../../../common/enums/Color.ts';
import { Size } from '../../../../common/enums/Size.ts';
import './LiveQuestionContainer.css';

const LiveQuestionContainer = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsTimeUp(true);
    }
  }, [timeLeft]);

  return (
    <div className={'quiz-create-container'}>
      <MainMenu />
      <div className={'quiz-create-container-content'}>
        <MainCard className='quiz' label={'nom de quiz'}></MainCard>
        <MainCard
          className='titre'
          label={'Question 1:'}
          bgColor={Color.WHITE}
          borderColor={Color.BLUE}
          cardSize={Size.LARGE}
        ></MainCard>
      </div>
      <div className='timer'>Temps restant : {timeLeft}s</div>
      <div className='reposes-container'>
        <TextButton
          className={`Repose1 ${selectedAnswer === 'Repose1' ? 'selected' : ''}`}
          label={'Repose1'}
          bgColor={selectedAnswer === 'Repose1' ? Color.BLUE : Color.WHITE}
          borderColor={Color.BLUE}
          btnSize={Size.SMALL}
          textColor={selectedAnswer === 'Repose1' ? Color.WHITE : Color.BLUE}
          onClick={() => handleAnswerClick('Repose1')}
        />
        <TextButton
          className={`Repose2 ${selectedAnswer === 'Repose2' ? 'selected' : ''}`}
          label={'Repose2'}
          bgColor={selectedAnswer === 'Repose2' ? Color.BLUE : Color.WHITE}
          borderColor={Color.BLUE}
          btnSize={Size.SMALL}
          textColor={selectedAnswer === 'Repose2' ? Color.WHITE : Color.BLUE}
          onClick={() => handleAnswerClick('Repose2')}
        />
        <TextButton
          className={`Repose3 ${selectedAnswer === 'Repose3' ? 'selected' : ''}`}
          label={'Repose3'}
          bgColor={selectedAnswer === 'Repose3' ? Color.BLUE : Color.WHITE}
          borderColor={Color.BLUE}
          btnSize={Size.SMALL}
          textColor={selectedAnswer === 'Repose3' ? Color.WHITE : Color.BLUE}
          onClick={() => handleAnswerClick('Repose3')}
        />
        <TextButton
          className={`Repose4 ${selectedAnswer === 'Repose4' ? 'selected' : ''}`}
          label={'Repose4'}
          bgColor={selectedAnswer === 'Repose4' ? Color.BLUE : Color.WHITE}
          borderColor={Color.BLUE}
          btnSize={Size.SMALL}
          textColor={selectedAnswer === 'Repose4' ? Color.WHITE : Color.BLUE}
          onClick={() => handleAnswerClick('Repose4')}
        />
      </div>
      {!isTimeUp && (
        <div className='button'>
          <TextButton
            className='terminer'
            label={'Terminer la question'}
            bgColor={Color.BLUE}
            borderColor={Color.BLUE}
            btnSize={Size.SMALL}
            textColor={Color.WHITE}
          />
        </div>
      )}
    </div>
  );
};

export default LiveQuestionContainer;
