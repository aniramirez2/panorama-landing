import Hero from './components/Hero';
import Features from './components/Features';
import { Box, Image } from '@chakra-ui/react';
import insta from "./assets/insta.png"

function App() {

  return (
    <>
      <Hero hideIntro={false} />
      <Features/>
      <Box display="flex" alignItems={"center"} paddingY={12} justifyContent={"center"}>
          Siguenos en <Image cursor={"pointer"} width={"50px"} src={insta} onClick={() => window.open("https://www.instagram.com/panorama_col/")} />
      </Box>
    </>
  )
}

export default App
