import { Box, CssBaseline, Grid } from '@material-ui/core';
import Routes from './routes';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <CssBaseline />
        <Routes />
      </Grid>
    </Box>
  );
}

export default App;
