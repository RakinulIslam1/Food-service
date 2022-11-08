import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Root from './components/Main/Root';
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
        },
        {
          path: "home",
          element: <Home></Home>,
        },
        {
          path: "services",
          element: <Services></Services>
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
