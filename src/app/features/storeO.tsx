import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies:['a','b','c']
  },
  reducers: {
    increment: state => {
      state.movies.push('d');
    },
    decrement: state => {
      state.movies = [];
    },
  },
});

export const { increment, decrement } = moviesSlice.actions;

export const selectMovies = (state: { movies: { movies: any; }; }) => state.movies.movies;
export default moviesSlice.reducer;
