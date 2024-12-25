import { Flex, Text, Link } from '@chakra-ui/react'
import React from 'react'
export const Footer = (): JSX.Element => {
  return (
    <div>
      <Flex
        padding={5}
        justify='center'
        marginTop='auto'
        background='#1F2029'
      >
        <Text
          fontSize={{ base: 'sm', md: 'md' }}
          fontWeight='bold'
          color='#fff'
          letterSpacing={0.5}
        >
          Develop with 💛 by
          <Link
            href="https://github.com/MatheusDev20"
            target="_blank"
            color='blue.300'
            ml='0.3rem'
          >
            MatheusDev20
          </Link>
        </Text>
      </Flex>
    </div>
  )
}
