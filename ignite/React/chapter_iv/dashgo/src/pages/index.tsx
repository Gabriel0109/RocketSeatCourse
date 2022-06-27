import { Flex, Input } from '@chakra-ui/react'
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
        p={8}
        flexDir="column"
        borderRadius={8}
        >
asd

    <Input name='email' type="email" />
    <Input name='password' type="password"/>
      </Flex>
    </Flex>
  )
}
