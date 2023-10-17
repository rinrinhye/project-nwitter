import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import ProtectedRoute from '../components/protected-route';
import Navbar from '../components/navbar';
import Profile from '../pages/profile';
import Login from '../pages/login';
import Layout from '../components/layout';
import CreateAccount from '../pages/create-account';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '',
        element: <Profile />
      }
    ]
  },
  { path: '/login', element: <Login /> },
  { path: '/create-account', element: <CreateAccount /> }
]);
