import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const query = `
query ($search: String!) {
  Page {
    media(search: $search, type: ANIME) {
      id
      title {
        english
        native
      }
      coverImage {
        large
      }
    }
  }
}
`;

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (debouncedValue: string) => {
    const res = await axios.post('https://graphql.anilist.co', {
      query,
      variables: {
        search: debouncedValue,
      },
      headers: {
        Authorization: 'Bearer ' + import.meta.env.ANIME_TOKEN,
      },
    });
    return res.data;
  }
);
