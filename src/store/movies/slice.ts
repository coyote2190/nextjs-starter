import { createSlice } from '@reduxjs/toolkit';
import { MoviesState, SetMoviesDataPayload } from './types';

export const moviesInitialState: MoviesState = {
  list: [
    {
      id: 1,
      title: 'Les Blues Brother',
      year: '190',
      runtime: '127 min',
      poster:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMDZZARJoDpsnLWPM2g_Km1o2jWZo1oJg6dvZhxJkbEbdFpiuy'
    },
    {
      id: 2,
      title: "N'oublie jamais",
      year: '2004',
      runtime: '123 min',
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKuEG2oOwksxEP3Fap13y51xhJNxHDEr6sMIduOasn6XKwG35Q'
    },
    {
      id: 3,
      title: 'Good Morning England',
      year: '2009',
      runtime: '129 min',
      poster: 'https://images.epagine.fr/287/5050582718287_vid.jpg'
    },
    {
      id: 4,
      title: 'Les Vendanges de feu',
      year: '1995',
      runtime: '102 min',
      poster: 'https://fr.web.img5.acsta.net/medias/nmedia/18/65/53/88/18868756.jpg'
    },
    {
      id: 5,
      title: 'Les Sept Mercenaires',
      year: '1960',
      runtime: '128 min',
      poster: 'https://fr.web.img6.acsta.net/medias/nmedia/18/36/23/68/19124745.jpg'
    }
  ],
  id: 'moviesStateID'
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: moviesInitialState,
  reducers: {
    updateListMovies: (state, { payload: list }: SetMoviesDataPayload) => {
      state.list = list;
    }
  }
});

export const { updateListMovies } = moviesSlice.actions;
const moviesReducer = moviesSlice.reducer;
export default moviesReducer;
