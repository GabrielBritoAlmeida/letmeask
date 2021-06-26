import { Box, Grid, Image, Text, Flex } from '@chakra-ui/react'
import illustrationImg from 'assets/images/illustration.svg'
import logoImg from 'assets/images/logo.svg'
import googleIconImg from 'assets/images/google-icon.svg'

export function HomeTemplate() {
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
        <Flex
          flexDirection="column"
          w="100%"
          maxW="320px"
          align="stretch"
          textAlign="center"
        >
          <Image src={logoImg} alt="Logo letmeask" alignSelf="center" />
          <button>
            <Image src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div>ou entre em uma sala</div>

          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <button type="submit">Entrar na sala</button>
          </form>
        </Flex>
      </Flex>
    </Grid>
  )
}
