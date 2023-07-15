import {create} from "zustand";

export const useBeerStore = create(set=>({
    beers: [],
    isLoading: false,
    error: null,
    isSelected: false,
    // isChanged: () => {
    //    return set((state) => {state.isSelected} )
    // },



    fetchBeers: async () => {
        set({isLoading: true})
        try {
            const res = await fetch(`https://api.punkapi.com/v2/beers?page=1`)
            const json = await res.json();
            set({beers: json});
        } catch (error) {
            set({error: error.message})
        }



    }

}))