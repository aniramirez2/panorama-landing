import Hero from './components/Hero';
import Features from './components/Features';
import { Box, Image, Text } from '@chakra-ui/react';
import insta from "./assets/insta.png"

function App() {

  return (
    <>
      <Hero hideIntro={false} />
      <Features/>
      <Box display="flex" alignItems={"center"} paddingTop={12} justifyContent={"center"}>
          Siguenos en <Image cursor={"pointer"} width={"50px"} src={insta} onClick={() => window.open("https://www.instagram.com/panorama_col/")} />
        
      </Box>
      
      <Text display="flex" alignItems={"center"} paddingBottom={12} justifyContent={"center"}>
            ¿Tienes alguna duda o sugerencia? Escríbenos a info@panoramacol.com
        </Text>
    </>
  )
}

export default App
