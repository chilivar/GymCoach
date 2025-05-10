import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import CoachesPage from './pages/CoachesPage';
import ShopPage from './pages/ShopPage';
import TrainersPage from './pages/TrainersPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/coaches" element={<CoachesPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/trainers" element={<TrainersPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;