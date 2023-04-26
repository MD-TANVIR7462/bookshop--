import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './components/Nav';
import Books from './components/Books';
import About from './components/About';
import Homes from './components/Homes';
import BookDetails from './components/BookDetails';
import Order from './components/Order';



const router =createBrowserRouter([
{
path:'/',
element:<App></App>,
children:[
  {path:'/',
  element:<Homes></Homes>

  },
  
  {
    path:"/books",
    element:<Books></Books>,
    loader:()=>fetch('https://api.itbook.store/1.0/new')
 

  },
  {
path:'books/:Id',
element:<BookDetails></BookDetails>,
 loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.Id}`)




},
{
path:'buy/:Id',
element:<Order></Order>,
loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.Id}`)
}
,
  {
    path:'/About',
    element:<About></About>
  },
  {
    path:'/orders',
    element:<Order></Order>
  }
]

}



])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
