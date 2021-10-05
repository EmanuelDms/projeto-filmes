import { useEffect, useState } from 'react';
import {
  Button,
  Grid,
  CircularProgress,
  Typography,
  Box,
} from '@material-ui/core';
import useStyles from './styles';
import useGeneralStyles from '../styles';

import { Link } from 'react-router-dom';
import movieRepository from '../../repositories/MovieRepository';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const { moviesContainer } = useGeneralStyles();

  useEffect(() => {
    async function loadMovies() {
      setLoading(true);
      const { data } = await movieRepository.get();
      setLoading(false);
      setMovies(data);
    }
    loadMovies();
  }, []);

  return (
    <Grid item container className={moviesContainer}>
      {!loading ? (
        movies.map((movie) => {
          return (
            <Grid item className={classes.movieItemContainer} key={movie.id}>
              <Typography variant="h1">{movie.nome}</Typography>
              <img src={movie.foto} alt={movie.nome} />
              <Button variant="contained" fullWidth color="primary">
                <Link to={`/filme/${movie.id}`}>Acessar</Link>
              </Button>
            </Grid>
          );
        })
      ) : (
        <Box height="90vh" display="flex" alignItems="center">
          <CircularProgress size={50} />
        </Box>
      )}
    </Grid>
  );
}
