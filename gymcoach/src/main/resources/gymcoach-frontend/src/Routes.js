import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import TipsPage from './pages/TipsPage';
import ShopPage from './pages/ShopPage';
import CoachesPage from './pages/CoachesPage';
import RegisterPage from './pages/RegisterPage'; // Импортируем новую страницу

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/tips" element={<TipsPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/coaches" element={<CoachesPage />} />
      <Route path="/register" element={<RegisterPage />} /> {/* Новый маршрут */}
    </Routes>
  );
}

export default AppRoutes;