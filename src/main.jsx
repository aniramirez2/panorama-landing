import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Libre Franklin', sans-serif`,
    body: `'Libre Franklin', sans-serif`,
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
)
