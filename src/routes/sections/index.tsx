import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import MainLayout from 'src/layouts/main';
import { mainRoutes, HomePage } from './main';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // SET INDEX PAGE WITH HOME PAGE
    {
      path: '/',
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },
    // Main routes
    ...mainRoutes,
    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
