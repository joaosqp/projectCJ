import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Ganhadores from './pages/Ganhadores';
import MeusSorteios from './pages/MeusSorteios';
import Produtos from './pages/Produtos';

import Footer from './components/Footer';
import Comocomprar from './pages/Footer/Comocomprar';
import Aempresa from './pages/Footer/AEmpresa';
import Privacidade from './pages/Footer/PrivacidadeeSegurança';
import Trocas from './pages/Footer/Trocas';
import Acompanharpedido from './pages/Footer/AcompanharPedido';
import Politicadeentrega from './pages/Footer/PoliticadeEntrega';

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
        <Route path="/comocomprar" element={<Comocomprar />} />
        <Route path="/aempresa" element={<Aempresa />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/trocas" element={<Trocas />} />
        <Route path="/acompanharpedido" element={<Acompanharpedido />} />
        <Route path="/politicadeentrega" element={<Politicadeentrega />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;