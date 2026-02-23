import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudyRoutine from './pages/StudyRoutine';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rotina-de-estudos" element={<StudyRoutine />} />
      </Routes>
    </BrowserRouter>
  );
}
