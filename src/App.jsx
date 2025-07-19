// App.js
import React, { useState, useEffect } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import NavPage from './Components/Navpage';
import Footer from './Components/Footer';
import WhatsAppButton from './Components/WhatsAppButton';
import fondodetalle from './Components/Images/fondo.jpg'; // Asegúrate de que la ruta sea correcta

function App() {
  const [data, setData] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 630);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 630);
      if (window.innerWidth > 768) {
        setSidebarOpen(false);
      }
    };

    // Agrega un event listener para manejar cambios de tamaño de pantalla
    window.addEventListener('resize', handleResize);

    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', 
     backgroundImage: `url(${fondodetalle})`, // si está en public
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  
       }}>
        <Navbar
          onMenuClick={handleSidebarToggle}
          windowWidth={isSmallScreen}
        />

        <Sidebar
          open={sidebarOpen}
          onClose={handleSidebarClose}
        />
        
        <NavPage />

        <WhatsAppButton /> {/* Añade el botón de WhatsApp aquí */}

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

// Sidebar.js
