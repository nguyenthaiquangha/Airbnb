import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { lazy } from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Infor from './pages/Infor/Infor';
import Travel from './pages/Travel/Travel';

const Home = lazy(() => import('./pages/Home/Home'));
const SearchByLocation = lazy(() => import('./pages/SearchByLocal/SearchByLocation'));
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomePage />} >
          <Route index element={<Home />} />
          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Register />}/>
          <Route path='infor' element={<Infor />}/>
          <Route path='travel' element={<Travel />}/>
          <Route path='/search-by-location' element={<SearchByLocation/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
