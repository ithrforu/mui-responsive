import { StrictMode } from 'react';
import { ScopedCssBaseline } from '@mui/material';
import ReactDOM from 'react-dom/client';
import App from './App';

import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <ScopedCssBaseline>
      <App />
    </ScopedCssBaseline>
  </StrictMode>
);
