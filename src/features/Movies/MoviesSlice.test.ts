import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { fetchMovies } from './MoviesAPI';
import moviesSlice, {
  addDebouncedSearchValue,
  addFavoriteMovie,
  removeFavoriteMovie,
  showMoreMovies,
  MoviesState,
} from './MoviesSlice';
import { MovieState } from '../../app/types';

const mock = new MockAdapter(axios);

let store: EnhancedStore<{ movies: MoviesState }>;

beforeEach(() => {
  mock.reset();

  store = configureStore({
    reducer: {
      movies: moviesSlice,
    },
  });
});

describe('movies slice', () => {
  const exampleMovie: MovieState = {
    id: 1,
    title: {
      native: 'Example Movie',
      english: 'Example Movie',
    },
    coverImage: { large: 'An example image' },
  };

  test('should handle fetchMovies', async () => {
    const searchValue = 'Example';
    const responseData = {
      data: {
        Page: {
          media: [exampleMovie],
        },
      },
    };

    mock.onPost('https://graphql.anilist.co').reply(200, responseData);

    await store.dispatch(fetchMovies(searchValue) as any);

    expect(store.getState().movies.movies).toContainEqual(exampleMovie);
  });

  test('should handle showMoreMovies', () => {
    store.dispatch(showMoreMovies());
    expect(store.getState().movies.perPage).toBe(6);
  });

  test('should handle addFavoriteMovie', () => {
    store.dispatch(addFavoriteMovie(exampleMovie));
    expect(store.getState().movies.favorites).toContainEqual(exampleMovie);
  });

  test('should handle removeFavoriteMovie', () => {
    store.dispatch(addFavoriteMovie(exampleMovie));
    store.dispatch(removeFavoriteMovie(exampleMovie.id));
    expect(store.getState().movies.favorites).not.toContainEqual(exampleMovie);
  });

  test('should handle addDebouncedSearchValue', () => {
    const searchValue = 'Inception';
    store.dispatch(addDebouncedSearchValue(searchValue));
    expect(store.getState().movies.moviesDebouncedSearchValue).toBe(
      searchValue
    );
  });
});
