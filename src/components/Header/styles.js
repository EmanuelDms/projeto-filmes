import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: `linear-gradient(0deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.light} 100%)`,
  },
  title: {
    flexGrow: 1,
    "& > h4": {
      color: theme.palette.getContrastText(theme.palette.primary.main),
      fontFamily: 'Times New Roman',
      fontWeight: theme.typography.fontWeightBold
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

export default useStyles;