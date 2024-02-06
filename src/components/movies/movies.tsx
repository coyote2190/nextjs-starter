'use client';

import useUpdateListMovies from '@/store/movies/hooks';
import { Movie } from '@/store/movies/types';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import useGetListMovies from '@/store/movies/selectors';
import StyledMoviesContainer from './movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState<Movie[] | undefined>(useGetListMovies());
  const [hasError, setHasError] = useState<boolean>(false);
  const updateListMovies = useUpdateListMovies();

  async function logMovies() {
    await axios
      .get('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
      .then((response) => {
        // handle success
        // const responseMovies: Movie[] = response.data.map((res: any, i: number) => {
        //   return {
        //     id: i,
        //     title: res.Title,
        //     year: res.Year,
        //     runtime: res.Runtime,
        //     poster: res.Poster
        //   };
        // });
        setMovies(response.data);
        setHasError(false);
        updateListMovies(response.data);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {});
  }

  return (
    <div>
      <h1 data-testid="movies_h1">Movies</h1>
      <Button data-testid="movies_btn" onClick={() => logMovies()}>
        Call Api
      </Button>

      <StyledMoviesContainer>
        {movies?.map((movie: Movie) => {
          return (
            <Card sx={{ maxWidth: 300 }} key={movie.id}>
              <CardMedia sx={{ height: 250 }} image={movie.poster} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </StyledMoviesContainer>

      {hasError && <p data-testid="movies_error-message">Error 404</p>}
    </div>
  );
};

export default Movies;
