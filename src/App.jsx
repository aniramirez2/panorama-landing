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
  Center,
  Avatar,
  Badge,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import logo from './assets/LOGO.png'
import { db } from '../firebase.config';
import { collection, addDoc } from "firebase/firestore";
import Hero from './components/Hero';
import Instagram from './components/Instagram';
import Features from './components/Features';

function App() {
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
      <Hero hideIntro={false} />
      <Features/>
      <Instagram />
      <br/>
      <Hero hideIntro={true} />
    </>
  )
}

export default App
