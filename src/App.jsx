import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage'
import AttractionsPage from './pages/Atractions';
import AtractionDetail from './components/attractions/AtractionDetail';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/atracoes' element={<AttractionsPage />} />
          <Route path='/atracoes/:id' element={<AtractionDetail />} />
        </Routes>
    </BrowserRouter>
  );
}
