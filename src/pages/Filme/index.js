import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import movieRepository from '../../repositories/MovieRepository';
import useGeneralStyles from '../styles';
import useStyles from './styles';

const Filme = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(0);
  const history = useHistory();

  const { moviesContainer } = useGeneralStyles();
  const classes = useStyles();

  useEffect(() => {
    async function loadMovie() {
      setLoading(true);
      const { data } = await movieRepository.getMovie(id);

      const hasNoData = data.length === 0;
      if (hasNoData) {
        return history.replace('/');
      }

      setLoading(false);
      setMovie(data);
    }
    loadMovie();
  }, [id]);

  return (
    <Grid item container className={moviesContainer}>
      {!loading ? (
        <Grid item className={classes.filmeInfo}>
          <Typography variant="h1">{movie.nome}</Typography>
          <img src={movie.foto} alt={movie.foto} />
          <h3>Sinopse</h3>
          <Typography paragraph>{movie.sinopse}</Typography>

          <div className="buttons">
            <Button variant="outlined" onClick={() => {}}>
              Salvar
            </Button>
            <Button variant="outlined">
              <a
                target="blank"
                href={`https://youtube.com/results?search_query=${movie.nome} Trailer`}
              >
                Trailer
              </a>
            </Button>
          </div>
        </Grid>
      ) : (
        <Box height="90vh" display="flex" alignItems="center">
          <CircularProgress size={50} />
        </Box>
      )}
    </Grid>
  );
};

export default Filme;
