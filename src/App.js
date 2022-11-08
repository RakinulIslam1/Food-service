import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
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
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => {
            return fetch("data.json");
          },
        },
        {
          path: "home",
          element: <Home></Home>,
          loader: () => {
            return fetch("data.json");
          },
        },
        {
          path: "services",
          element: <Services></Services>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "signup",
          element: <Register></Register>
        
        }
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
