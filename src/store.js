import {create} from "zustand";
import axios from "axios";

export const useBeerStore = create(set=>({
    beers: [],
    isLoading: false,
    error: null,
    isSelected: false,
    selectedBeers: [],
    currentPage: 2 ,
    totalBeers: 15,
    pageSize: 4,
    isChanged: () => {
        set((state) => {return state.isSelected} )
    },
    setCurrentPage: () => {
        set((state) => { return state.currentPage})
    },
    addBeer: (beer) => {
        set((state) => ({
            selectedBeers: [
                {name: beer.name , id: beer.key, description: beer.description},
                ...state.selectedBeers,
            ]
        }))
    },
    deleteBeer: (name) => {
        set((state) => ({
            selectedBeer: state.selectedBeer.filter((beer) => beer.name !== name)
        }))
    },


    getBeers: async ()=> {
        set({isLoading: true})
        try {
            const res = await axios.get(`https://api.punkapi.com/v2/beers?page=${useBeerStore.getState().currentPage}&per_page=${useBeerStore.getState().totalBeers}`)
            set({ beers: res.data })
        } catch (error) {
            set({error: error.message})
        }

    }
}))