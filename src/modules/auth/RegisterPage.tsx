import React, { useState } from 'react';
import TextInput from '../../common/components/input/TextInput';
import PasswordInput from '../../common/components/input/PasswordInput';
import EmailInput from '../../common/components/input/EmailInput';
import TextButton from '../../common/components/text-button/TextButton.tsx';
import { Color } from '../../common/utils/Colors.tsx';
import { Size } from '../../common/utils/Size.tsx';

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
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f8fafc',
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
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <TextInput
          label='Nom'
          placeholder='Votre nom'
          value={formData.name}
          onChange={e =>
            handleChange({ ...e, target: { ...e.target, name: 'name' } })
          }
        />
        <TextInput
          label='Prénom'
          placeholder='Votre prénom'
          value={formData.firstName}
          onChange={e =>
            handleChange({ ...e, target: { ...e.target, name: 'firstName' } })
          }
        />
        <EmailInput
          label='Email'
          placeholder='Votre email'
          value={formData.email}
          onChange={e =>
            handleChange({ ...e, target: { ...e.target, name: 'email' } })
          }
        />
        <PasswordInput
          label='Mot de passe'
          placeholder='Votre mot de passe'
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
