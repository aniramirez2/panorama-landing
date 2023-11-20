import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  useBreakpointValue,
  IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
}


function Carousel() {
  const [slider, setSlider] = useState(null)

  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  const cards = [
    {
      title: 'ARTBO',
      text: "",
      image:
        'https://res.cloudinary.com/dinkekjhz/image/upload/v1699829832/artbo_udx9x5.jpg',
      color: 'black'
    },
    {
      title: 'Galerias',
      text: "",
      image:
        'https://res.cloudinary.com/dinkekjhz/image/upload/v1699829832/galerias_qufdc1.jpg',
      color: 'black'
    },
    {
      title: 'Teatros',
      text: "",
      image:
        'https://res.cloudinary.com/dinkekjhz/image/upload/v1699829832/teatros_urrk1k.jpg',
      color: 'white'
    },
    {
      title: 'Museos',
      text: "",
      image:
        'https://res.cloudinary.com/dinkekjhz/image/upload/v1699829833/museos_svmxep.jpg',
      color: 'white'
    },
  ]

  return (
    <>
      <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'} marginTop={12}>
      
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="start"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundImage={`url(${card.image})`}>
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color={card.color}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
      </Box>
    </>
  )
}

export default Carousel
