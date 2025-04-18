import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import Header from "./components/Header";
import Container from '@mui/material/Container';
import Footer from "./components/Footer";
import Layout from './Layout';
import Home from './components/Home';
import EventsGallery from './components/EventsGallery';
import Mentor from './components/Mentor';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>} />
        <Route path='eventgallery' element={<EventsGallery/>} />
        <Route path='mentor' element={<Mentor/>} />
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
