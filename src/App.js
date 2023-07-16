import { useEffect } from 'react';
import './App.css';
import Root from './pages/Root/Root.jsx'
import {useBeerStore} from "./store";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import BeerPage from "./pages/BeerPage/BeerPage";

function App() {
    const beers = useBeerStore(state => state.beers)
    const getBeers = useBeerStore(state => state.getBeers)
    const pageSize = useBeerStore(state => state.pageSize)
    const totalBeers = useBeerStore(state => state.totalBeers)
    const isSelected = useBeerStore(state => state.isSelected)
    const currentPage = useBeerStore(state => state.currentPage)

    const onSelectBtn = () => {
        console.log(!isSelected)
    }


  useEffect(() => {
    getBeers()
  }, [])
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<Root pageSize={pageSize} totalBeers={totalBeers} currentPage={currentPage} onSelectBtn={onSelectBtn} beers={beers} getBeers={getBeers}/>}/>
                <Route path='/beer-page' element={<BeerPage beers={beers}/>}/>
            </>
        )
    )
  return (
      <RouterProvider router={router} />
  );
}

export default App;
