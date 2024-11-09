import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './component/Rootlayout/RootLayout';
import Home from './Pages/Home';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/"  element={<RootLayout />}>
    <Route index  element={<Home />}></Route>
    </Route>
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
