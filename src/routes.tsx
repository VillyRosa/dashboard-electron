import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Content } from './components/Content'
import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import AuthProvider, { useAuthContext } from './context/Auth'
import { MainContainer } from './components/MainContainer'
import CreateCustomer from './pages/Customers/CreateCustomer'
import Sales from './pages/Sales'
import Products from './pages/Products'
import Settings from './pages/Settings'

function AuthenticatedRoutes() {
  const auth = useAuthContext()

  if (!auth.user) {
    return (
      <Routes>
        <Route element={<MainContainer />}>
          <Route path='/' element={<Login />} />
          <Route path='*' element={<Login />} />
        </Route>
      </Routes>
    )
  }

  return (
    <Routes>
      <Route element={<MainContainer />}>
        <Route path='/' element={<Content />}>
          <Route index element={<Dashboard />} />
          <Route path='/sales' element={<Sales />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/customers/create' element={<CreateCustomer />} />
          <Route path='/products' element={<Products />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AuthenticatedRoutes />
      </BrowserRouter>
    </AuthProvider>
  )
}
