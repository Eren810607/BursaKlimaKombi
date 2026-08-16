import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './app.css'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import AddCallIcon from '@mui/icons-material/AddCall';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Header from "./HeaderFooter/Header";
import Footer from "./HeaderFooter/Footer";

import Home from "./Components/Home";
import About from "./Components/About";
import KlimaBakimi from "./Components/KlimaBakimi";
import KombiBakimi from "./Components/KombiBakimi";
import PetekBakimi from "./Components/PetekBakimi";
import BeyazEsyaTamiri from "./Components/BeyazEsyaTamiri";
import ArizaOnarim from "./Components/ArizaOnarim";


function App() {


  const actions = [
    {
      icon: <AddCallIcon />,
      name: 'Arama Yap',
      phone: '905XXXXXXXXX'
    },
    {
      icon: <WhatsAppIcon />,
      phone: '905XXXXXXXXX',
      name: 'Whatsapp Mesaj',
      message: 'Merhabalar, Size İnternet Siteniz Üzerinden Ulaşıyorum. Yardımcı Olma Şansınız Var Mı Acaba?'
    },
    {
      icon: <InstagramIcon />,
      name: 'Instagram Profiline Git',
      link: 'https://www.instagram.com/bursa.klima.kombi'
    },
    {
      icon: <FacebookIcon />,
      name: 'Facebook Profiline Git',
      link: 'https://www.facebook.com/profile.php?id=100076622749135'
    }
  ];


  return (
    <Router basename="/BursaKlimaKombi">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/klima-bakimi" element={<KlimaBakimi />} />
        <Route path="/kombi-bakimi" element={<KombiBakimi />} />
        <Route path="/petek-bakimi" element={<PetekBakimi />} />
        <Route path="/beyaz-esya-tamiri" element={<BeyazEsyaTamiri />} />
        <Route path="/ariza-onarim-parca-degisimi" element={<ArizaOnarim />} />
      </Routes>


      <Box
        sx={{
          position: 'fixed',
          bottom: {
            xs: '20px',
            sm: '25px'
          },
          right: {
            xs: '15px',
            sm: '25px'
          },

        }}
      >
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 16,

            '& .MuiSpeedDial-fab': {
              backgroundColor: '#000',
              color: 'white',

              '&:hover': {
                backgroundColor: '#222',
              },
            },
          }}
          icon={<LocalPhoneIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              slotProps={{
                tooltip: {
                  title: action.name,
                },
              }}
              onClick={() => {
                if (action.phone) {
                  window.location.href = `tel:${action.phone}`;
                }

                if (action.message) {
                  window.open(
                    `https://wa.me/${action.phone}?text=${encodeURIComponent(action.message)}`,
                    '_blank'
                  );
                }

                if (action.link) {
                  window.open(action.link, '_blank');
                }
              }}
            />
          ))}
        </SpeedDial>
      </Box>


      <Footer />
    </Router >
  );
}

export default App;