import Login from './pages/login/Login';
import './App.css';

import ViewNoticias from './pages/noticias/viewNoticias';
import ErrorPage from './pages/error/error'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "pages/noticias/viewNoticias",
    element:<ViewNoticias />,
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
