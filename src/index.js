import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const customTheme = extendTheme({ config });

ReactDOM.render(
  <ChakraProvider theme={customTheme}>
    <ColorModeScript />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
