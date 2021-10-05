import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  movieItemContainer: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    padding: theme.spacing(1.875),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.getContrastText(theme.palette.common.black),
    '& h1': {
      marginTop: 0,
      textAlign: 'center',
    },
    '& strong': {
      fontWeight: theme.typography.fontWeightBold,
    },
    '& a': {
      color: theme.palette.getContrastText(theme.palette.common.black),
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
      padding: 0,
      '& a': {
        padding: `${theme.spacing(0.75)}px ${theme.spacing(2)}px`,
        width: '100%',
        height: '100%',
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    '& img': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
    },
  },
}));

export default useStyles;
