import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoIosColorPalette } from "react-icons/io";
import { MdMuseum } from 'react-icons/md'
import {FaBroom, FaTheaterMasks} from 'react-icons/fa'

const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'center'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('yellow.500', 'yellow.700')}>
          {icon}
        </Flex>
        <Box mt={2} textAlign={"center"}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  )
}

export default function Features() {
  return (
    <Box p={4} paddingY={12}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={700}>
          Conoce la oferta cultural en Bogotá
        </Heading>
      </Stack>

      <Container maxW={'7xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'ARTBO'}
            icon={<Icon as={IoIosColorPalette} w={10} h={10} />}
            description={'Estamos presentes en la feria de arte de Bogotá'}
          />
          <Card
            heading={'Museos'}
            icon={<Icon as={MdMuseum} w={10} h={10} />}
            description={'Te contamos toda la agenda de los museos.'}
          />
          <Card
            heading={'Galerias'}
            icon={<Icon as={FaBroom} w={10} h={10} />}
            description={'Conoce todo el circuito de galerias y sus programaciones'}
          />
          <Card
            heading={'Teatros'}
            icon={<Icon as={FaTheaterMasks} w={10} h={10} />}
            description={'Entérate de todos los programas de los teatros de la ciudad'}
          />
        </Flex>
      </Container>
    </Box>
  )
}