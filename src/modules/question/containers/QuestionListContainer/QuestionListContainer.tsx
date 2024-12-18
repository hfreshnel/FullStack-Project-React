import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../../../../common/components/icon-button/IconButton.tsx';
import MainCard from '../../../../common/components/main-card/MainCard.tsx';
import MainMenu from '../../../../common/components/main-menu/mainMenu.tsx';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import { Color } from '../../../../common/enums/Color.ts';
import { Size } from '../../../../common/enums/Size.ts';
import './QuestionListContainer.css';

const QuestionListContainer = () => {
  return (
    <div className={'question-list-container'}>
      <MainMenu />
      <div className={'titre'}>
        <MainCard
          label='Question 1'
          textColor={Color.BLUE}
          cardSize={Size.MEDIUM}
          className='titre-nom'
        ></MainCard>
        <IconButton
          icon={faPenToSquare}
          iconColor={Color.YELLOW}
          btnSize={Size.LARGE}
          className='icon'
        />
      </div>
      <div className={'question-list-container-content'}>
        <MainCard
          label=''
          bgColor={Color.WHITE}
          textColor={Color.BLUE}
          className='contenu'
        />
        <MainCard
          label='Réponse 1'
          bgColor={Color.BLUE}
          textColor={Color.WHITE}
          className='choix'
        />
        <IconButton
          icon={faPenToSquare}
          iconColor={Color.YELLOW}
          bgColor={Color.WHITE}
          className='edit'
        />
        <MainCard
          label='Réponse 2'
          bgColor={Color.BLUE}
          textColor={Color.WHITE}
          className='choix'
        />
        <IconButton
          icon={faPenToSquare}
          iconColor={Color.YELLOW}
          bgColor={Color.WHITE}
          className='edit'
        />
        <MainCard
          label='Réponse 3'
          bgColor={Color.BLUE}
          textColor={Color.WHITE}
          className='choix'
        />
        <IconButton
          icon={faPenToSquare}
          iconColor={Color.YELLOW}
          bgColor={Color.WHITE}
          className='edit'
        />
        <MainCard
          label='Réponse 4'
          bgColor={Color.BLUE}
          textColor={Color.WHITE}
          className='choix'
        />
        <IconButton
          icon={faPenToSquare}
          iconColor={Color.YELLOW}
          bgColor={Color.WHITE}
          className='edit'
        />
      </div>

      <IconButton icon={faPenToSquare} iconColor={Color.YELLOW} />
      <TextButton
        label={'Sauvegarder la question '}
        borderColor={Color.BLUE}
        bgColor={Color.WHITE}
        textColor={Color.BLUE}
        btnSize={Size.LARGE}
        className='button-sauvegarder'
      ></TextButton>
    </div>
  );
};

export default QuestionListContainer;
