import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import DetailsPage from './components/DetailsPage/DetailsPage';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Root from './components/Main/Root';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';
import Register from './components/Register/Register';
import Reviwes from './components/Reviwes/Reviwes';
import Services from './components/Services/Services';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => {
            return fetch("http://localhost:5000/service");
          },
        },
        {
          path: "home",
          element: <Home></Home>,
          loader: () => {
            return fetch("http://localhost:5000/service");
          },
        },
        {
          path: "services",
          element: <Services></Services>,
          loader: () => {
            return fetch("http://localhost:5000/services");
          },
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "signup",
          element: <Register></Register>,
        },
        {
          path: "/details/:id",
          element: <DetailsPage></DetailsPage>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/services/${params.id}`),
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },
        {
          path: "review",
          element: (
            <PrivateRoutes>
              <Reviwes></Reviwes>
            </PrivateRoutes>
          ),
          loader: () => {
            return fetch("http://localhost:5000/services");
          },
        },
      ],
    },
  ]);
  return (
    <div className="App md:mx-10">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
