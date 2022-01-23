//Libraries
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
//Contexts
import AuthProvider from './contexts/auth';
//Routes
import Routes from './routes'
//Styles
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer autoClose={3000} />
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}