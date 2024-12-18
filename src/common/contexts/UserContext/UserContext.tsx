import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IUserEntity } from '../../entities/IUserEntity';
import { TUserContextType } from './types/TUserContextType';

const UserContext = createContext<TUserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<IUserEntity | null>(null);
  const [allUsers, setAllUsers] = useState<IUserEntity[] | null>(null);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        allUsers,
        setCurrentUser,
        setAllUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): TUserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
