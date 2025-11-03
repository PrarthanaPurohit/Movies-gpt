import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState: {
        showGptSearch: false,
        movieNames: null, 
        movieResults: null,
    },
    reducers:{
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResults: (state, action) => { 
            const {movieNames, movieResults} = action.payload; 
            state.movieNames = movieNames; 
            state.movieResults = movieResults; 
        },
        // Clear GPT results (used when leaving search view)
        clearGptMovieResults: (state) => {
            state.movieNames = null;
            state.movieResults = null;
        }
    }
})

export const {toggleGptSearchView, addGptMovieResults, clearGptMovieResults} = gptSlice.actions;

export default gptSlice.reducer;