import { Box, Grid, Image, Text, Flex, Input, VStack } from '@chakra-ui/react'
import { ButtonBase } from 'components/ButtonBase'
import { CgEnter } from 'react-icons/cg'

import illustrationImg from 'assets/images/illustration.svg'
import logoImg from 'assets/images/logo.svg'
import googleIconImg from 'assets/images/google-icon.svg'

import { useHistory } from 'react-router-dom'
import { useAuthentication } from 'hooks/context/Authentication'

export function HomeTemplate() {
  const { signWithGoogle, isAuthentication } = useAuthentication()
  const { push } = useHistory()

  async function handleCreateRoom() {
    if (isAuthentication) {
      push('/rooms/new')
    }

    if (!isAuthentication) {
      const success = await signWithGoogle()
      if (success) push('/rooms/new')
    }
  }

  return (
    <Grid w="100%" h="100vh" templateColumns="repeat(2, 1fr)">
      <Box
        as="aside"
        flex="7"
        bgColor="purple.600"
        color="white"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        p="120px 80px"
      >
        <Image
          maxW="320px"
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <Text as="strong" fontSize="4xl">
          Crie salas de Q&amp;A ao-vivo
        </Text>
        <Text fontSize="2xl">
          Tire as dúvidas da sua audiência em tempo-real
        </Text>
      </Box>

      <Flex as="main" align="center" justify="center" flex="8" p="0 32px">
        <VStack
          spacing="24px"
          w="100%"
          maxW="320px"
          align="stretch"
          textAlign="center"
        >
          <Image src={logoImg} alt="Logo letmeask" alignSelf="center" />
          <ButtonBase
            isFullWidth
            colorScheme="red"
            leftIcon={
              <Image src={googleIconImg} alt="Logo google" alignSelf="center" />
            }
            text="Crie sua sala com o Google"
            onClick={handleCreateRoom}
          />

          <Text color="gray.600" fontSize="sm">
            ou entre em uma sala
          </Text>

          <Input
            type="text"
            placeholder="Digite o código da sala"
            focusBorderColor="#6b46c1"
          />
          <ButtonBase
            isFullWidth
            colorScheme="purple"
            text="Entrar na sala"
            type="submit"
            leftIcon={<CgEnter />}
          />
        </VStack>
      </Flex>
    </Grid>
  )
}
