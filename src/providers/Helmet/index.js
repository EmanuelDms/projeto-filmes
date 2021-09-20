import { useTheme } from '@material-ui/core';
import { Helmet as Head, HelmetProvider as Provider } from 'react-helmet-async';

export default function Helmet({ title }) {
  const theme = useTheme();
  return (
    <Provider>
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <title>Filmes</title>
      </Head>
    </Provider>
  )
}
