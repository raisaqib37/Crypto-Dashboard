import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const From = () => {
  return (
    <Stack bg={"white"} p={3} borderRadius={"xl"}>
      <Heading>
        You will receive response within 24 hours of time of submit.
      </Heading>
      <FormControl mt={"5"}>
        <FormLabel fontWeight={"semibold"}>First Name</FormLabel>
        <Input type="name" placeholder="Muhammad" />
        <FormLabel fontWeight={"semibold"}>Last Name</FormLabel>
        <Input type="name" placeholder="Saqib" />
        <FormLabel fontWeight={"semibold"}>Email</FormLabel>
        <Input type="email" placeholder="muhammadsaqib@gmail.com" />
        <FormLabel fontWeight={"semibold"}>Message</FormLabel>
        <Textarea rows={"4"} />
        <HStack mt={3}>
          <Checkbox />
          <Text fontSize={"sm"} fontWeight={"semibold"}>
            I agree with{" "}
            <Box
              as={"span"}
              color="purple.400"
              _hover={{
                cursor: "pointer",
                color: "purple.700",
              }}
            >
              Terms & Conditions
            </Box>
          </Text>
        </HStack>
        <Stack mt={5}>
          <Button _hover={{
            color:"white",
            bg:"black.80",
          }} bg={"black.20"} color={"black"} width={"full"} >Send a Message</Button>
          <Button _hover={{
            color:"white",
            bg:"black.80",
          }}  bg={"black.20"} color={"black"} width={"full"} >Book a Meeting</Button>
        </Stack>
      </FormControl>
    </Stack>
  );
};

export default From;
