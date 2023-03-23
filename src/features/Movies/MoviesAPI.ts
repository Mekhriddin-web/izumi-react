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

const API_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUwYmViZTdlZmQyMDYyMjA0MTM2NTY3ZDU5ODJkYTkwMzRjMGM2YjEyN2VjNDM5OTExZjk1ZTAyYTFhYWQ4ZmNlMTZiYWI4M2MyYWQzMjI2In0';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (debouncedValue: string) => {
    const res = await axios.post('https://graphql.anilist.co', {
      query,
      variables: {
        search: debouncedValue,
      },
      headers: {
        Authorization: 'Bearer ' + API_TOKEN,
      },
    });
    return res.data;
  }
);
