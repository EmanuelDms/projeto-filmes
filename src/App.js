import { Box, Grid } from "@material-ui/core";
import Routes from "./routes";

// https://sujeitoprogramador.com/r-api/?api=filmes

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Routes />
      </Grid>
    </Box>
  );
}

export default App;
