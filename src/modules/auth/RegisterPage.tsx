import React, { useState } from 'react';
import Input from '../../common/components/input/Input';
import TextButton from '../../common/components/text-button/TextButton.tsx';
import { InputType } from '../../common/utils/InputType.tsx';
import { Size } from '../../common/utils/Size.tsx';
import { Color } from '../../common/utils/Colors.tsx';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>Inscription</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '300px',
        }}
      >
        <Input
          label='Nom'
          type={InputType.TEXT}
          placeholder='Votre nom'
          bgColor='white'
          textColor='grey'
          inputSize={Size.MEDIUM}
          value={formData.name}
          onChange={e =>
            handleChange({ ...e, target: { ...e.target, name: 'name' } })
          }
        />
        <Input
          label='Prénom'
          type={InputType.TEXT}
          placeholder='Votre prénom'
          bgColor='white'
          textColor='grey'
          inputSize={Size.MEDIUM}
          value={formData.firstName}
          onChange={e =>
            handleChange({ ...e, target: { ...e.target, name: 'firstName' } })
          }
        />
        <Input
          label='Email'
          type={InputType.EMAIL}
          placeholder='Votre email'
          bgColor='white'
          textColor='grey'
          inputSize={Size.MEDIUM}
          value={formData.email}
          onChange={e =>
            handleChange({ ...e, target: { ...e.target, name: 'email' } })
          }
        />
        <Input
          label='Mot de passe'
          type={InputType.PASSWORD}
          placeholder='Votre mot de passe'
          bgColor='white'
          textColor='grey'
          inputSize={Size.MEDIUM}
          value={formData.password}
          onChange={e =>
            handleChange({ ...e, target: { ...e.target, name: 'password' } })
          }
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
