import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { ThemeProvider } from '@emotion/react';
import './index.css';

const theme = {
  colors: {
    backgroundColor: '#ffec18',
    sectionBackgroundColor: '#fcffc7',
    buttonBackgroundColor: '#ff9b18',
    goodButtonHoverColor: '#85ff34',
    neutralButtonHoverColor: '#34ccff',
    badButtonHoverColor: '#fe6767',
  },
  containerBorderRadius: '20px',
  buttonBorderRadius: '5px',
  buttonBorder: '1px solid #bb9665',
  boxShadow: '3px 5px 10px 3px rgba(0, 0, 0, 0.30)',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
