import React, { useState } from 'react';
import Input from '../../common/components/input/Input';
import TextButton from '../../common/components/text-button/TextButton.tsx';
import { InputType } from '../../common/utils/InputType.tsx';
import { Size } from '../../common/utils/Size.tsx';
import { Color } from '../../common/utils/Colors.tsx';

const RegisterPage: React.FC = () => {
  const [formData] = useState({
    name: '',
    firstName: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f8fafc', // Couleur de fond moderne
        padding: '20px',
      }}
    >
      <h1 style={{ marginBottom: '20px', color: '#333', fontSize: '24px' }}>
        Inscription
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          width: '100%',
          maxWidth: '400px',
          backgroundColor: '#ffffff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)', // Ombre plus moderne
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <Input
          label='Nom'
          type={InputType.TEXT}
          placeholder='Votre nom'
          bgColor={Color.WHITE}
          textColor={Color.GREY}
          inputSize={Size.MEDIUM}
          value={formData.name}
        />
        <Input
          label='Prénom'
          type={InputType.TEXT}
          placeholder='Votre prénom'
          bgColor={Color.WHITE}
          textColor={Color.GREY}
          inputSize={Size.MEDIUM}
          value={formData.firstName}
        />
        <Input
          label='Email'
          type={InputType.EMAIL}
          placeholder='Votre email'
          bgColor={Color.WHITE}
          textColor={Color.GREY}
          inputSize={Size.MEDIUM}
          value={formData.email}
        />
        <Input
          label='Mot de passe'
          type={InputType.PASSWORD}
          placeholder='Votre mot de passe'
          bgColor={Color.WHITE}
          textColor={Color.GREY}
          inputSize={Size.MEDIUM}
          value={formData.password}
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

export default RegisterPage;
