import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './styles/tailwind.scss';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import UserTable from './pages/admin/User';
import MerchantTable from './pages/admin/Merchant';
import TerminalTable from './pages/admin/Terminal';
import Login from './pages/auth/Login';
import '../src/services/interceptor';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/admin/user" element={<UserTable />} />
        <Route exact path="/admin/merchant" element={<MerchantTable />} />
        <Route exact path="/admin/terminal" element={<TerminalTable />} />
        <Route exact path="/auth/login" element={<Login />} />

      </Routes>
    </>
  );
}

export default App;
