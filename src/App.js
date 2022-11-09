import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import DetailsPage from './components/DetailsPage/DetailsPage';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Root from './components/Main/Root';
import Register from './components/Register/Register';
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
