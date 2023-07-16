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
    deleteBeer: (id) => {
        set((state) => ({
            beers: state.selectedBeer.filter((beer) => beer.id !== id)
        }))
    },


    getBeers: async ()=> {
        set({isLoading: true})
        try {
            const res = await axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=15`)
            set({ beers: res.data })
        } catch (error) {
            set({error: error.message})
        }

    }
}))