import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        NowPlayingMovies: null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        popularSeries: null,
        topRatedSeries:null,
    },
    reducers:{
        addNowPlayingMovies:(state, action) => {
            state.NowPlayingMovies = action.payload;
        }, 
        addTrailerVideo: (state,action) => {
            state.trailerVideo = action.payload;
        }, 
        addPopularMovies:(state,action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies:(state,action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies:(state,action) => {
            state.upcomingMovies = action.payload;
        },
        addPopularSeries:(state,action) => {
            state.popularSeries = action.payload;
        },
        addTopRatedSeries:(state,action) => {
            state.topRatedSeries = action.payload;
        },

    }
});

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addPopularSeries, addTopRatedSeries} = movieSlice.actions;

export default movieSlice.reducer;