import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import StickyFooter from './componets/Footer';
import NavigationBar from './componets/NavigationBar';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Airdrop from './pages/Airdrop';
import Contact from './pages/Contact';
import About from './pages/About';

export default function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', }} >
      <CssBaseline />
      <NavigationBar />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="airdrop" element={<Airdrop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Container>
      <StickyFooter/>
    </Box>
  );
}