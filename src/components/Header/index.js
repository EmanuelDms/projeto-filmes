import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    height: "7vh",
  },
  title: {
    "& > h4": {
      color: theme.palette.getContrastText(theme.palette.primary.main),
    },
  },
  saved: {
    "& > button": {
      fontWeight: theme.typography.fontWeightBold,
      backgroundColor: theme.palette.getContrastText(
        theme.palette.common.black
      ),
    },
  },
}));

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
      <Link to="/" className={classes.saved}>
        <Button variant="contained">Salvos</Button>
      </Link>
    </Grid>
  );
}
