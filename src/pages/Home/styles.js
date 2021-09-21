import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  moviesContainer: {
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
  },
  movieItemContainer: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    padding: theme.spacing(1.875),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.getContrastText(theme.palette.background.default),
    '& h1': {
      marginTop: 0,
      textAlign: 'center',
    },
    '& strong': {
      fontWeight: theme.typography.fontWeightBold,
    },
    '& a': {
      color: theme.palette.getContrastText(theme.palette.background.default),
    },

    '& img, &': {
      [theme.breakpoints.down('sm')]: {
        width: '100vw',
        borderRadius: 0,
      },
    },
    '& button': {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      [theme.breakpoints.down('sm')]: {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
        width: '100vw',
        marginTop: theme.spacing(2),
      },
    },
    '& img': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
    },
  },
}));

export default useStyles;
