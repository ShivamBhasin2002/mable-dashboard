import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import '@styles/datePicker.css';
import '@styles/global.css';
import '@styles/utility.css';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { wrapper } from '@redux/store';
import { Provider } from 'react-redux';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  BarElement,
  ArcElement
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Head from 'next/head';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  ChartDataLabels,
  BarElement,
  ArcElement
);

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Head>
          <link rel="shortcut icon" href="/mable.svg" />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
};

export default MyApp;
