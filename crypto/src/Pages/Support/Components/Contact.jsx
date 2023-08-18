import { Heading, Icon, Stack, Text } from '@chakra-ui/react'
import { SiGmail } from 'react-icons/si'
const Contact = () => {
  return (
    <Stack p="6">
        <Icon fontSize={"20px"} cursor={"pointer"} as={SiGmail} color="red.400" />
        <Heading fontSize={"30px"}>Contact Us</Heading>
        <Text maxW={"17rem"} color={"black.80"} fontWeight={"medium"}>Have a question or just want to know more? Feel free to reach out to us.</Text>
    </Stack>
  )
}

export default Contact