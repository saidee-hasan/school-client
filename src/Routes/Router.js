import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import Admison from "../components/Admison/Admison";


export const router = createBrowserRouter([
  { path: "/", 
  element: <MainLayout />,
   children: [
  {path:'/ad', element:<Admison/>},

   
   ] },
]);
