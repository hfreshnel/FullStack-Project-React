import { TLoginFormProps } from './types/TLoginFormProps';
import React from 'react';
import Input from '../../../../common/components/input/Input.tsx';
import { InputType } from '../../../../common/enums/InputType.ts';
import { Color } from '../../../../common/utils/Colors.tsx';
import { Size } from '../../../../common/enums/Size.ts';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import './LoginForm.css';

const LoginForm: React.FC<TLoginFormProps> = ({}) => {
  return (
    <div className={'login-container'}>
      <form className={'login-form'}>
        <Input
          type={InputType.EMAIL}
          placeholder='Email'
          bgColor={Color.WHITE}
          textColor={Color.BLUE}
          inputSize={Size.LARGE}
        />
        <Input
          type={InputType.PASSWORD}
          placeholder='Mot de passe'
          bgColor={Color.WHITE}
          textColor={Color.BLUE}
          inputSize={Size.LARGE}
        />
        <TextButton
          label="S'inscrire"
          bgColor={Color.BLUE}
          textColor={Color.WHITE}
          btnSize={Size.LARGE}
        />
      </form>
    </div>
  );
};

export default LoginForm;
