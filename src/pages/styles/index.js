import { makeStyles } from '@material-ui/core';

const useGeneralStyles = makeStyles((theme) => ({
  moviesContainer: {
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default useGeneralStyles;
