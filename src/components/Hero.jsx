import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  FormControl,
  Input,
  Button,
  Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import { db } from '../../firebase.config';
import { collection, addDoc } from "firebase/firestore";

function Hero({hideIntro}) {
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [state, setState] = useState('initial')
  const [error, setError] = useState(false)


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
          hidden={hideIntro}
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          paddingY={12}>
          <Heading
            fontWeight={700}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'100%'}>
            Descubre el 
            <Text as={'span'} color={'yellow.400'} ml={3}>
               PANORAMA 
            </Text>
             <br/> de eventos en Bogotá
          </Heading>
          <Text color={'gray.500'}  marginTop="-30px" marginBottom="30px">
            Sé el Primero en Saber qué hacer: ¡Únete Hoy a Nuestra Comunidad de Eventos!.
          </Text>
        </Stack>
        <Flex
          align={'center'}
          justify={'center'}
          paddingY={12}>
          <Container>
            <Heading
              as={'h2'}
              fontSize={{ base: 'xl', sm: '2xl' }}
              textAlign={'center'}
              mb={5}>
              Suscríbete para recibir las mejores recomendaciones: 
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
                : "No enviaremos spam en ningún momento. ¡No te vas a arrepentir! ✌️"}
            </Text>
          </Container>
        </Flex>
      </Container>
    </>
  )
}

export default Hero
