import React from 'react';
import { Routes, Route } from 'react-router-dom';
import QuizListContainer from '../../containers/QuizListContainer/QuizListContainer.tsx';

const ListRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/quiz' element={<QuizListContainer />} />
    </Routes>
  );
};

export default ListRouter;
