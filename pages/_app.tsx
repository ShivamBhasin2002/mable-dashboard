import '../styles/index.css';
import '../styles/datePicker.css';
import '../styles/utility.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { wrapper, store } from '@redux/store';
import { Provider } from 'react-redux';
import colors from '@utility/colors';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    components: {
      Progress: {
        baseStyle: {
          filledTrack: {
            bg: colors.success
          }
        }
      }
    }
  });

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
