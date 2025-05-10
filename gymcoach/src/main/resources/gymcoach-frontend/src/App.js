import { BrowserRouter as Router } from 'react-router-dom'; // Импортируем Router
import AppRoutes from './Routes';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;