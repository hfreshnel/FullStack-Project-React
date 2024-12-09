import React from 'react';
import Input from '../../common/components/input/Input';
import TextButton from '../../common/components/text-button/TextButton';
import { InputType } from '../../common/utils/InputType.tsx';
import { Size } from '../../common/utils/Size.tsx';
import { Color } from '../../common/utils/Colors.tsx';

const RegisterPage: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8fafc',
        padding: '20px',
      }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%',
          maxWidth: '400px',
          backgroundColor: 'f8fafc',
          padding: '30px',
          borderRadius: '12px',
        }}
      >
        <Input
          label=''
          type={InputType.EMAIL}
          placeholder='Email'
          bgColor={Color.WHITE}
          textColor={Color.BLUE}
          inputSize={Size.LARGE}
        />
        <Input
          label=''
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
          type='submit'
        />
      </form>
    </div>
  );
};

export default RegisterPage;
