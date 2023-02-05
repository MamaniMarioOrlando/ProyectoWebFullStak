import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AuthProvider } from './contex.jsx/AuthProvider';
import {  AuthLayout } from './layout/AuthLayout';
import { Login } from './pages/Login'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route
          path = '/'
          element = {<AuthLayout/>}
        >
          <Route
            index
            element = {<Login/>} 
          />
        </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
