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
import { LuMusic4 } from "react-icons/lu";
import {FaBroom, FaTheaterMasks} from 'react-icons/fa'
import { FaBookOpen } from "react-icons/fa6";
import { GiLargeDress } from "react-icons/gi";

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
          bg={useColorModeValue('yellow')}>
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

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'ARTBO'}
            icon={<Icon as={IoIosColorPalette} w={10} h={10} />}
            description={'Estamos presentes en la feria de arte de Bogotá'}
          />
          <Card
            heading={'Arte'}
            icon={<Icon as={FaBroom} w={10} h={10} />}
            description={'Te contamos toda la agenda de las galerias de arte.'}
          />
          <Card
            heading={'Música'}
            icon={<Icon as={LuMusic4} w={10} h={10} />}
            description={'Conoce todo el circuito de eventos musicales y sus programaciones'}
          />
          <Card
            heading={'Literatura'}
            icon={<Icon as={FaBookOpen} w={10} h={10} />}
            description={'Conoce la oferta de literatura en la ciudad'}
          />
          <Card
            heading={'Teatros'}
            icon={<Icon as={FaTheaterMasks} w={10} h={10} />}
            description={'Entérate de todos los programas de los teatros de Bogotá'}
          />
          <Card
            heading={'Moda'}
            icon={<Icon as={GiLargeDress} w={10} h={10} />}
            description={'Explora los eventos de moda'}
          />
        </Flex>
      </Container>
    </Box>
  )
}