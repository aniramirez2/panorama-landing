import {
  Box,
  Heading,
  Container,
  Text,
  createIcon,
  Stack,
  FormControl,
  Input,
  Button,
  Flex,
  useBreakpointValue,
  IconButton,
  useColorModeValue,
  Center,
  Avatar,
  Badge,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import logo from './assets/LOGO.png'
import { db } from '../firebase.config';
import { collection, addDoc } from "firebase/firestore"; 

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

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
})

function App() {
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [state, setState] = useState('initial')
  const [error, setError] = useState(false)
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

  const handleSendForm = async() => {
    setState("submitting")
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email,
        whatsapp,
      });
      setState("success")
    } catch (e) {
      setError("Error adding document")
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          paddingTop={12}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'100%'}>
            Descubre el 
            <Text as={'span'} color={'yellow.400'} ml={3}>
               PANORAMA 
            </Text>
             <br/> de eventos en Bogotá
          </Heading>
          <Text color={'gray.500'}  marginTop="-30px" marginBottom="30px">
            Se el Primero en Saber qué hacer: ¡Únete Hoy a Nuestra Comunidad de Eventos!.
          </Text>
        </Stack>
        <Flex
          align={'center'}
          justify={'center'}>
          <Container>
            <Heading
              as={'h2'}
              fontSize={{ base: 'xl', sm: '2xl' }}
              textAlign={'center'}
              mb={5}>
              Suscribete para recibir las mejores recomendaciones: 
            </Heading>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              as={'form'}
              spacing={'12px'}
              onSubmit={(e) => {
                e.preventDefault()
                setError(false)
                handleSendForm()
              }}>
              <FormControl>
                <Input
                  variant={'solid'}
                  borderWidth={1}
                  color={'gray.800'}
                  _placeholder={{
                    color: 'gray.400',
                  }}
                  borderColor={'gray.300'}
                  id={'email'}
                  type={'email'}
                  required
                  placeholder={' Email'}
                  aria-label={' Email'}
                  value={email}
                  disabled={state !== 'initial'}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <Input
                  variant={'solid'}
                  borderWidth={1}
                  color={'gray.800'}
                  _placeholder={{
                    color: 'gray.400',
                  }}
                  borderColor={'gray.300'}
                  id={'whatsapp'}
                  type={'text'}
                  required
                  placeholder={'Whatsapp'}
                  aria-label={'Whatsapp'}
                  value={whatsapp}
                  disabled={state !== 'initial'}
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
              </FormControl>
              <FormControl w={{ base: '100%', md: '40%' }}>
                <Button
                  colorScheme={state === 'success' ? 'green' : 'blue'}
                  isLoading={state === 'submitting'}
                  w="100%"
                  type={state === 'success' ? 'button' : 'Enviar'}>
                  {state === 'success' ? <CheckIcon /> : 'Enviar'}
                </Button>
              </FormControl>
            </Stack>
            <Text mt={2} textAlign={'center'} color={error ? 'red.500' : 'gray.500'}>
              {error
                ? 'Oh no an error occured! 😢 Please try again later.'
                : "No te vas a arrepentir! ✌️"}
            </Text>
          </Container>
        </Flex>
      </Container>
      <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'} marginTop={12}>
      {/* CSS files for react-slick */}
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
      {/* Left Icon */}
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
      {/* Right Icon */}
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
      {/* Slider */}
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
            {/* This is the block you need to change, to customize the caption */}
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
      
      <Box w="50%" pt="50px" textAlign="center" margin="auto">
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={5}>
          Siguenos en Instagram y conoce el Panorama de eventos en Bogotá: 
        </Heading>
      </Box>
      <br/>
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={logo}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Panorama
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            @panorama_col
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Hola
            ¿Quiere saber qué hay para hacer en Chapinero, Bogotá?
            ¡Aquí tenemos la respuesta!
            Entérese de todo el Panorama cultural en la zona 🇨🇴
          </Text>

          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #arte
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #galerias
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #teatros
            </Badge>
          </Stack>

          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              onClick={() => window.open("https://www.instagram.com/direct/t/17843635160924383")}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
              type="button">
              Mensaje
            </Button>
            <Button
              type='button'
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              onClick={() => window.open("https://www.instagram.com/panorama_col/")}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Seguir
            </Button>
          </Stack>
        </Box>
      </Center>      
      <Flex
        align={'center'}
        justify={'center'}
        py={8}>
        <Container>
          <Heading
            as={'h2'}
            fontSize={{ base: 'xl', sm: '2xl' }}
            textAlign={'center'}
            mb={5}>
            Suscribete para recibir las mejores recomendaciones: 
          </Heading>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            as={'form'}
            spacing={'12px'}
            onSubmit={(e) => {
              e.preventDefault()
              setError(false)
              handleSendForm()
            }}>
            <FormControl>
              <Input
                variant={'solid'}
                borderWidth={1}
                color={'gray.800'}
                _placeholder={{
                  color: 'gray.400',
                }}
                borderColor={'gray.300'}
                id={'email'}
                type={'email'}
                required
                placeholder={' Email'}
                aria-label={' Email'}
                value={email}
                disabled={state !== 'initial'}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                variant={'solid'}
                borderWidth={1}
                color={'gray.800'}
                _placeholder={{
                  color: 'gray.400',
                }}
                borderColor={'gray.300'}
                id={'whatsapp'}
                type={'text'}
                required
                placeholder={'Whatsapp'}
                aria-label={'Whatsapp'}
                value={whatsapp}
                disabled={state !== 'initial'}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </FormControl>
            <FormControl w={{ base: '100%', md: '40%' }}>
              <Button
                colorScheme={state === 'success' ? 'green' : 'blue'}
                isLoading={state === 'submitting'}
                w="100%"
                type={state === 'success' ? 'button' : 'Enviar'}>
                {state === 'success' ? <CheckIcon /> : 'Enviar'}
              </Button>
            </FormControl>
          </Stack>
          <Text mt={2} textAlign={'center'} color={error ? 'red.500' : 'gray.500'}>
            {error
              ? 'Oh no an error occured! 😢 Please try again later.'
              : "No te vas a arrepentir! ✌️"}
          </Text>
        </Container>
      </Flex>
    </>
  )
}

export default App
