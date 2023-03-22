import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieState } from '../../app/types';
import { fetchMovies } from './MoviesAPI';

interface MoviesState {
  movies: MovieState[];
  moviesError: string;
  perPage: number;
  favorites: MovieState[];
  moviesDebouncedSearchValue: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MoviesState = {
  movies: [],
  moviesError: '',
  perPage: 3,
  favorites: [],
  moviesDebouncedSearchValue: '',
  status: 'idle',
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    showMoreMovies: state => {
      state.perPage += 3;
    },
    addFavoriteMovie: (state, action: PayloadAction<MovieState>) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavoriteMovie: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        favorite => favorite.id !== action.payload
      );
    },
    addDebouncedSearchValue: (state, action: PayloadAction<string>) => {
      state.moviesDebouncedSearchValue = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'idle';
        state.movies = action.payload.data.Page.media;
        state.perPage = 3;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.moviesError = action.error.message || 'Что-то пошло не так';
      });
  },
});

export const {
  showMoreMovies,
  addFavoriteMovie,
  removeFavoriteMovie,
  addDebouncedSearchValue,
} = moviesSlice.actions;

export default moviesSlice.reducer;
