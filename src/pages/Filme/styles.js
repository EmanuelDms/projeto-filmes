import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  filmeInfo: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '900px',
    [theme.breakpoints.down('900')]: {
      textAlign: 'center',
    },

    '& *': {
      marginTop: theme.spacing(1.875),
    },

    '& img': {
      borderRadius: '20px',
      width: '100%',
      [theme.breakpoints.down('900')]: {
        width: '100vw',
        borderRadius: 0,
      },
    },
    '& button': {
      marginRight: '5px',
      marginTop: '15px',
    },
  },
}));

export default useStyles;
