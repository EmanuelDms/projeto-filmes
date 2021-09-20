import { Box, Typography, useTheme } from '@material-ui/core';

export default function Error() {
  const theme = useTheme();

  return (
    <Box display="flex" alignItems="center" justifyContent="center" sx={{
      width: "100vw",
      height: "90vh",
      '& h1': {
        color: theme.palette.grey[400],
        fontWeight: theme.typography.fontWeightLight,
      }
    }}>
      <Typography variant="h1" align="center">
        404 - Página não encontrada
      </Typography>
    </Box>
  )
}