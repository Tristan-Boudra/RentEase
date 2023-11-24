import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Property from './views/Property';
import Tenant from './views/Tenant';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/property',
    element: <Property />,
  },
  {
    path: '/tenant',
    element: <Tenant />,
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App;