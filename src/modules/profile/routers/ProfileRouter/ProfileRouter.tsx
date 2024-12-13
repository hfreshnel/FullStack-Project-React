import { Routes, Route } from 'react-router-dom';
import ProfileContainer from '../../containers/ProfileContainer/ProfileContainer.tsx';

const ListRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<ProfileContainer />} />
    </Routes>
  );
};

export default ListRouter;
