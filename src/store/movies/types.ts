import { PayloadAction } from '@reduxjs/toolkit';

export type MoviesState = {
  id: string;
  list: Movie[];
};

export type Movie = {
  id: number;
  poster: string;
  runtime: string;
  title: string;
  year: string;
};

export type SetMoviesDataPayload = PayloadAction<Movie[]>;
