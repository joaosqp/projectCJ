import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Login from './pages/Login';
import Ganhadores from './pages/Ganhadores';
import MeusSorteios from './pages/MeusSorteios';
import Produtos from './pages/Produtos';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Ganhadores" element={<Ganhadores />} />
        <Route path="/MeusSorteios" element={<MeusSorteios />} />
        <Route path="/Produtos" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;