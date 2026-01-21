import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OfficeBearersPage from './pages/the-chamber/OfficeBearersPage';
import CommitteeMembers from './pages/the-chamber/CommitteeMembers';
import PastPresidents from './pages/the-chamber/PastPresidents';
import MembershipSupport from './pages/services/MembershipSupport';
import BusinessAdvisory from './pages/services/BusinessAdvisory';
import TradeFacilitation from './pages/services/TradeFacilitation';
import B2BMatchmaking from './pages/services/B2BMatchmaking';
import Agriculture from './pages/sectors/Agriculture';
import Handicrafts from './pages/sectors/Handicrafts';
import Tourism from './pages/sectors/Tourism';
import MembershipForm from './pages/MembershipForm';
import './index.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/office-bearers' element={<OfficeBearersPage />} />
        <Route path="/committee-members" element={<CommitteeMembers />} />
        <Route path="/past-presidents" element={<PastPresidents />} />
        <Route path="/membership-support" element={<MembershipSupport />} />
        <Route path="/business-advisory" element={<BusinessAdvisory />} />
        <Route path="/trade-facilitation" element={<TradeFacilitation />} />
        <Route path="/b2b-matchmaking" element={<B2BMatchmaking />} />
        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/handicrafts" element={<Handicrafts />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/membership-form" element={<MembershipForm />} />
        
      </Routes>
    </BrowserRouter>
  )
}