
import React from 'react';
import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

const App = () => {
  return (
    <div>
      <Header />
     <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[ 
      {path:"/",
        element:<Body/>
      },{

      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element:<Contact/>, 
    },
  ],
    errorElement:<Error/>
    ,
  },
 
]);

const Root = () => {
  return <RouterProvider router={appRouter} />;
};

export default Root;
