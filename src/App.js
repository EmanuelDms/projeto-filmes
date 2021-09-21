import { Box, Grid } from '@material-ui/core';
import Routes from './routes';

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
