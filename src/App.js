import { useEffect } from 'react';
import './App.css';
import Root from './pages/Root/Root.jsx'
import {useBeerStore} from "./store";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import BeerPage from "./pages/BeerPage/BeerPage";

function App(props) {
    const beers = useBeerStore(state => state.beers)
    const getBeers = useBeerStore(state => state.getBeers)
    const pageSize = useBeerStore(state => state.pageSize)
    const totalBeers = useBeerStore(state => state.totalBeers)
    const isSelected = useBeerStore(state => state.isSelected)
    const currentPage = useBeerStore(state => state.currentPage)


    const onChangeSelect = () => {
        useBeerStore.getState(!isSelected);
        console.log(isSelected)
    }


  useEffect(() => {
    getBeers()
  }, [])
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<Root pageSize={pageSize} totalBeers={totalBeers} currentPage={currentPage} onChangeSelect={onChangeSelect} beers={beers} getBeers={getBeers}/>}/>
                <Route path='/beer-page' element={<BeerPage/>}/>
            </>
        )
    )
  return (
      <RouterProvider router={router} />
  );
}

export default App;
