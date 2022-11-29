import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Base from './App';
import { store } from './store';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Base />
  </Provider>
);
