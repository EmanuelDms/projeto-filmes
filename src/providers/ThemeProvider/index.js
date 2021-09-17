import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

export default function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
