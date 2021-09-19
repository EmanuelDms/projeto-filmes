import { Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

export default function Header() {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      xs={12}
      alignItems="center"
      justifyContent="space-around"
      className={classes.container}
    >
      <Link to="/" className={classes.title}>
        <Typography variant="h4">Filmes</Typography>
      </Link>
      <Link to="/favoritos" className={classes.saved}>
        <Button variant="contained">Salvos</Button>
      </Link>
    </Grid>
  );
}
