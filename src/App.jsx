import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage'
import AttractionsPage from './pages/Atractions';
import AtractionDetail from './components/attractions/AtractionDetail';
import LocalBusinesses from './pages/LocalBusinesses';
import LocalBusinessDetail from './components/business/LocalBusinessDetail';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/atracoes' element={<AttractionsPage />} />
          <Route path='/atracoes/:id' element={<AtractionDetail />} />
          <Route path='/negocios' element={<LocalBusinesses />} />
          <Route path='/negocios/:id' element={<LocalBusinessDetail />} />
        </Routes>
    </BrowserRouter>
  );
}
