import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OfficeBearersPage from './pages/OfficeBearersPage';
import './index.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/office-bearers' element={<OfficeBearersPage />} />
      </Routes>
    </BrowserRouter>
  )
}