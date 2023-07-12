import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const SearchByLocation = lazy(() => import('./pages/SearchByLocal/SearchByLocation'));
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomePage />} >
          <Route index element={<Home />} />
          <Route path='/search-by-location' element={<SearchByLocation/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
