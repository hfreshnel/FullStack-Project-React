import { useState } from 'react';
import Input from '../../../../common/components/input/Input.tsx';
import MainMenu from '../../../../common/components/main-menu/mainMenu.tsx';
import { InputType } from '../../../../common/enums/InputType.ts';

import './ProfileContainer.css';
import { Color } from '../../../../common/enums/Color.ts';

const mockProfile = {
  data: {
    id: 16,
    nom: "Toto",
    prenom: "Toto",
    mail: "dede@mail.com",
    mdp: "$2a$10$/rULR2cSKdiyX0PpCdGnk.tpo/BVtRBJ0B7jczZC7Nu9mMW1XhGoC",
    role: 0
  },
  code: 200,
  error: null
};

function ProfileContainer() {
  const { nom, prenom, mail, role } = mockProfile.data;
  
  const [firstNameData, setFirstNameData] = useState(prenom);
  const [lastNameData, setLastNameData] = useState(nom);
  const [mailData, setMailData] = useState(mail);
  const [roleData, setRoleData] = useState(role === 0 ? "Utilisateur" : "Administrateur");
  return (
    <>
      <MainMenu />
      <div className='profile-title-container'>
        <h1 className='profile-title'>Profil de l'utilisateur</h1>
        <div className='profile-container'>
        <Input
        type={InputType.TEXT}
        placeholder='Prénom'
        value={firstNameData}
        onChange={e => setFirstNameData(e.target.value)}
        textColor={Color.WHITE}
        bgColor={Color.BLUE}
        disabled={true}
      />
        <Input
        type={InputType.TEXT}
        placeholder='Nom'
        value={lastNameData}
        onChange={e => setLastNameData(e.target.value)}
        textColor={Color.WHITE}
        bgColor={Color.BLUE}
        disabled={true}
      />
        <Input
        type={InputType.TEXT}
        placeholder='Email'
        value={mailData}
        onChange={e => setMailData(e.target.value)}
        textColor={Color.WHITE}
        bgColor={Color.BLUE}
        disabled={true}
      />
        <Input
        type={InputType.TEXT}
        placeholder='Role'
        value={roleData}
        onChange={e => setRoleData(e.target.value)}
        textColor={Color.WHITE}
        bgColor={Color.BLUE}
        disabled={true}
      />
        </div>
      </div>
    </>
  );
}

export default ProfileContainer;
