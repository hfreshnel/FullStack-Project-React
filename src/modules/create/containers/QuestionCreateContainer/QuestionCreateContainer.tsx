import React, { useState } from 'react';
import { Color } from '../../../../common/enums/Color.ts';
import { InputType } from '../../../../common/enums/InputType.ts';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import MainMenu from '../../../../common/components/main-menu/mainMenu.tsx';
import Input from '../../../../common/components/input/Input.tsx';
import './QuestionCreateContainer.css';
import { Size } from '../../../../common/enums/Size.ts';

const QuestionCreateContainer: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [proposition1, setProposition1] = useState('');
  const [proposition2, setProposition2] = useState('');
  const [proposition3, setProposition3] = useState('');
  const [proposition4, setProposition4] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Question:', question);
    console.log(
      'Réponses:',
      proposition1,
      proposition2,
      proposition3,
      proposition4,
    );
  };

  return (
    <>
      <MainMenu />
      <div className='question-create-container'>
        <form className='question-create-form' onSubmit={handleSubmit}>
          <Input
            type={InputType.TEXT}
            placeholder='Question :'
            value={question}
            onChange={e => setQuestion(e.target.value)}
            textColor={Color.BLUE}
            bgColor={Color.TRANSPARENT}
          />
          <div className='propositions-container'>
            <Input
              type={InputType.TEXT}
              placeholder='Réponse 1'
              value={proposition1}
              onChange={e => setProposition1(e.target.value)}
              textColor={Color.WHITE}
              bgColor={Color.BLUE}
            />
            <Input
              type={InputType.TEXT}
              placeholder='Réponse 2'
              value={proposition2}
              onChange={e => setProposition2(e.target.value)}
              textColor={Color.WHITE}
              bgColor={Color.BLUE}
            />
            <Input
              type={InputType.TEXT}
              placeholder='Réponse 3'
              value={proposition3}
              onChange={e => setProposition3(e.target.value)}
              textColor={Color.WHITE}
              bgColor={Color.BLUE}
            />
            <Input
              type={InputType.TEXT}
              placeholder='Réponse 4'
              value={proposition4}
              onChange={e => setProposition4(e.target.value)}
              textColor={Color.WHITE}
              bgColor={Color.BLUE}
            />
          </div>
          <TextButton
            type='submit'
            label='Sauvegarder la question'
            bgColor={Color.WHITE}
            borderColor={Color.BLUE}
            textColor={Color.BLUE}
          />
        </form>
      </div>
    </>
  );
};

export default QuestionCreateContainer;
