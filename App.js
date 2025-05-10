import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import Header from './components/Header';
import './App.css';
import Particles from 'react-particles';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import { AuthProvider } from './context/AuthContext';

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: '#1e3c72',
      },
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#f09819',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
      },
    },
    detectRetina: true,
  };

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
          <Header />
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;