import {Flex, Text } from '@chakra-ui/react'

export function Header(){
    return(
        <Flex
          as="header"
          w="100%"
          maxWidth={1480}
          h="20"
          mt="4"
          mx="auto"
          px="6"
          align="center">
            <Text
              fontSize="3xl"
              fontWeight="bold"
              letterSpacing="tight"
              w="64">dashgo
               <Text as="span" color="pink.500">
                .
              </Text></Text>
             
        </Flex>
    )
}