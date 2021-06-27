import { Box, Grid, Image, Text, Flex, Input, VStack } from '@chakra-ui/react'
import { ButtonBase } from 'components/ButtonBase'
import { CgEnter } from 'react-icons/cg'

import illustrationImg from 'assets/images/illustration.svg'
import logoImg from 'assets/images/logo.svg'
import { useHistory } from 'react-router-dom'

export function NewRoomTemplate() {
  const { push } = useHistory()

  function navigateToHome() {
    push('/')
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

          <Text as="strong" fontSize="md" letterSpacing="wider">
            Crie uma nova sala
          </Text>

          <Input
            type="text"
            placeholder="Nome da sala"
            focusBorderColor="#6b46c1"
          />
          <ButtonBase
            isFullWidth
            colorScheme="purple"
            text="Criar sala"
            type="submit"
            leftIcon={<CgEnter />}
          />

          <Text color="#737380" fontSize="sm" display="flex">
            Quer entrar em uma sala existente?
            <Text
              onClick={navigateToHome}
              color="pink.600"
              fontSize="sm"
              ml="2"
              cursor="pointer"
            >
              Clique aqui!
            </Text>
          </Text>
        </VStack>
      </Flex>
    </Grid>
  )
}
