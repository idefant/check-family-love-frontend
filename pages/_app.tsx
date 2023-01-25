import '../styles/globals.scss';
import { Provider } from 'react-redux';

import { setupStore } from '../store';

import type { AppProps } from 'next/app';

const store = setupStore();

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
