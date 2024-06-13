import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Content } from './components/Content';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import AuthProvider, { useAuthContext } from './context/Auth';

function AuthenticatedRoutes() {
  const auth = useAuthContext();

  if (!auth.user) {
    return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='*' element={<Login />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path='/' element={<Content />}>
        <Route index element={<Dashboard />} />
        <Route path='/clients' element={<Clients />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AuthenticatedRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}
