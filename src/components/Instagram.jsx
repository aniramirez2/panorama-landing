import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  Center,
  Avatar,
  Badge,
} from '@chakra-ui/react';
import logo from '../assets/LOGO.png'

function Instagram() {

  return (
    <>      
      <Box w="50%" pt="50px" textAlign="center" margin="auto">
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={5}>
          Síguenos en Instagram y conoce el Panorama de eventos en Bogotá: 
        </Heading>
      </Box>
      <br/>
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={'white'}
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
            color={'gray.700'}
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
              bg={'gray.50'}
              fontWeight={'400'}>
              #arte
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={'gray.50'}
              fontWeight={'400'}>
              #galerias
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={'gray.50'}
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
    </>
  )
}

export default Instagram
