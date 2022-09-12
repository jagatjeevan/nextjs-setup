import { AppProps } from 'next/app';
import { Provider as ThemeProvider } from '../context/themeContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
