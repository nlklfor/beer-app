import {create} from "zustand";
import axios from "axios";

export const useBeerStore = create(set=>({
    beers: [],
    isLoading: false,
    error: null,
    selectedBeers: [],
    currentPage: 1 ,
    totalBeers: 15,
    pageSize: 4,
    currentCard: {},
    setCurrentCard: (obj) => {
        set((state) => ({
            currentCard: {...obj},
        }))
    },
    addBeer: (id) => {
        if (useBeerStore.getState().selectedBeers.includes(id)) {
            set((state) => ({
                selectedBeers: state.selectedBeers.filter((item) => item !== id ),
            }))
        } else {
            set((state) => ({
                selectedBeers: [
                    ...state.selectedBeers, id
                ]
            }))
        }

    },
    deleteBeer: async (id) => {
        set({isLoading: true})
        try {
            const res = await axios.get(`https://api.punkapi.com/v2/beers?page=${useBeerStore.getState().currentPage}&per_page=${useBeerStore.getState().totalBeers + useBeerStore.getState().selectedBeers.length}`)
            set(state=> ({
                beers: res.data.filter((item) => !state.selectedBeers.includes(item.id)),
                selectedBeers: [],
            }))
        } catch (error) {
            set({error: error.message})
        }
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