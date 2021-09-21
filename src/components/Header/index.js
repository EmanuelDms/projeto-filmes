import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Link to="/" className={classes.title}>
          <Typography variant="h4">Filmes</Typography>
        </Link>
        <Link to="/favoritos" className={classes.saved}>
          <Button variant="contained">Salvos</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
