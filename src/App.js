import { useEffect } from 'react';
import './App.css';
import Root from './pages/Root/Root.jsx'
import {useBeerStore} from "./store";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import BeerPage from "./pages/BeerPage/BeerPage";

function App() {
    const beers = useBeerStore(state => state.beers)
    const fetchBeers = useBeerStore(state => state.fetchBeers)
    const isSelected = useBeerStore(state => state.isSelected)

    const onSelectBtn = () => {
        console.log(!isSelected)
    }


  useEffect(() => {
    fetchBeers()
  }, )
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<Root onSelectBtn={onSelectBtn} beers={beers} fetchBeers={fetchBeers}/>}/>
                <Route path='/beer-page' element={<BeerPage beers={beers}/>}/>
            </>
        )
    )
  return (
      <RouterProvider router={router} />
  );
}

export default App;
