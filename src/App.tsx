import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import StudyRoutine from './pages/StudyRoutine';
import { MetaPixel } from './components/MetaPixel';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <MetaPixel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rotina-de-estudos" element={<StudyRoutine />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
