import './App.css'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Applayout } from '../layour/jsx/applayout.jsx'
import { Appmain } from '../layour/jsx/appmain.jsx'
import { BookSlot } from '../sections/jsx/bookslot.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'


function App() {
  const router = createBrowserRouter([{
    path:"/",
    element:<Applayout />,
    children:[
      {
        index:true , 
        element:<Appmain/>
      },
      {
        path:"home/", 
        element:<Appmain/>
      },
      {
        path:'book/',
        element:<BookSlot/>
      }
    ]
  }])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
