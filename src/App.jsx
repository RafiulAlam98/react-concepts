import './App.css'
import '../src/css/Homepage.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './Routes/MainRoutes'


function App() {

  return (
    <>
      <RouterProvider router={MainRoutes}/>
    </>
  )
}
export default App

// Steps for React Routing
//step 1= Install React Router Dom
//step 2= Routes Components
//step 3= createBrowserRouter Import
//step 4= components
//step 5= path create createBrowserRouter er moddhe
//step 6= call the element
//step 7= main routes added to app.jsx file RouterProvider