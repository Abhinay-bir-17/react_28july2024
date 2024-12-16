import React from 'react';
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
// import Card  from "./components/Card";
import About from './components/About';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
const AppLayout = ()=>{
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>  
  );       
}           

const appRouter = createBrowserRouter([ 
  {
    path:"/",
    element: <AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/", element:<Body />    
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact", element:<Contact/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu /> 
      }
    ]
  } 
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)