import { Button, Flex, Input, Stack } from '@chakra-ui/react'
export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        flexDir="column"
        borderRadius={8}
      >
        {/* EMAIL */}
  <Stack spacing="4">
          <Input
            name='email'
            type="email"
            focusBorderColor='pink.500'
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor: 'gray.900'
            }}
            size="lg"
          />
          {/* PASSWORD */}
          <Input
            name='password'
            type="password"
            focusBorderColor='pink.500'
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor: 'gray.900'
            }}
            size="lg"
          />
  </Stack>
        <Button type="submit" mt="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
