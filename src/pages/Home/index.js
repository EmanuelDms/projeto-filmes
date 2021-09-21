import { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import movieRepository from '../../repositories/MovieRepository';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    async function loadMovies() {
      const response = await movieRepository.get();
      setMovies(response.data);
    }
    loadMovies();
  }, []);

  return (
    <Grid item container className={classes.moviesContainer}>
      {movies.map((movie) => {
        return (
          <Grid item className={classes.movieItemContainer} key={movie.id}>
            <Typography variant="h1">{movie.nome}</Typography>
            <img src={movie.foto} alt={movie.nome} />
            <Button variant="contained" fullWidth color="primary">
              <Link to={`/filme/${movie.id}`}>Acessar</Link>
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
}
