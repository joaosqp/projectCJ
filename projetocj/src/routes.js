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

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Pagina Login isolada do Layout padrão*/}
        <Route path="Login" element={<Login />} />

        {/*Paginas com Layout padrão*/}
        <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
        <Route path="/Ganhadores" element={<DefaultLayout><Ganhadores /></DefaultLayout>} />
        <Route path="/MeusSorteios" element={<DefaultLayout> <MeusSorteios /> </DefaultLayout>} />
        <Route path="/Produtos" element={<DefaultLayout> <Produtos /> </DefaultLayout>} />
        <Route path="/comocomprar" element={<DefaultLayout> <Comocomprar /> </DefaultLayout>} />
        <Route path="/aempresa" element={<DefaultLayout> <Aempresa /> </DefaultLayout>} />
        <Route path="/privacidade" element={<DefaultLayout> <Privacidade /> </DefaultLayout>} />
        <Route path="/trocas" element={<DefaultLayout> <Trocas /> </DefaultLayout>} />
        <Route path="/acompanharpedido" element={<DefaultLayout> <Acompanharpedido /> </DefaultLayout>} />
        <Route path="/politicadeentrega" element={<DefaultLayout> <Politicadeentrega /> </DefaultLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;