import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'; // Componente principal da sua landing page
import ValidateCertificate from '../pages/ValidateCertificate'; // Página de validação

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificados/:certificateId/validar" element={<ValidateCertificate />} />
        {/* Adicione outras rotas aqui, se necessário */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
