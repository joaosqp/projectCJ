import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home'; // Alterado para importação nomeada

function RoutesApp () {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
            <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;