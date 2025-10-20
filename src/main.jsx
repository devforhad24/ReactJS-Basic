import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AdminCategories from './components/admin/AdminCategories';
import AdminManageUsers from './components/admin/AdminManageUsers';
import AdminProducts from './components/admin/AdminProducts';
import AdminProfile from './components/admin/AdminProfile';
import ProductDetails from './components/ProductDetails';
import UserOrder from './components/user/UserOrder';
import UserProfile from './components/user/UserProfile';
import './index.css';
import Header from './layout/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import SignIn from './pages/SignIn';
import AdminRoute from './routes/AdminRoute';
import ProtectedRoute from './routes/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Products />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/products/:id',
        element: <ProductDetails />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/dashboard/user',
        element: <ProtectedRoute />,
        children: [
          { path: 'profile',
            element: <UserProfile/>
          },
          {
            path: 'orders',
            element: <UserOrder/>
          },
        ],
      },
      {
        path: '/dashboard/admin',
        element: <AdminRoute />,
        children: [
          { path: 'profile',
            element: <AdminProfile/>
          },
          {
            path: 'products',
            element: <AdminProducts/>
          },
          {
            path: 'categories',
            element: <AdminCategories/>
          },
          {
            path: 'users',
            element: <AdminManageUsers/>
          },
        ],
      }
      // {
      //   path: '*',
      //   element: <NotFound />,
      // },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
