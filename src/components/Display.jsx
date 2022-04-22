import { Box, Container, StackDivider, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMail } from "../Redux/action";
const Display = ({ AllMail }) => {
  const dispatch = useDispatch();
  console.log("AllMail:", AllMail);
  const { mails } = useSelector((store) => store);
  console.log("mails:", mails);
  useEffect(() => {
    dispatch(getMail(AllMail));
  }, []);

  return (
    <VStack
      w="90%"
      display={"flex"}
      justifyContent="start"
      alignItems="start"
      marginTop={"20px"}
      marginLeft={200}
      paddingTop={20}
    >
      {mails.map((mail) => (
        <Box
          key={mail.id}
          bg="blackAlpha.500"
          color="gray.100"
          p={2}
          rounded="md"
          fontSize="lg"
          w="100%"
          textTransform="uppercase"
          _hover={{ border: "2px solid gray.200" }}
          d="flex"
          alignItems="center"
        >
          <Text fontWeight="semibold" color="white">
            {mail.subject}
          </Text>
          {"-"}
          <Text color="blackAlpha.600">
            {mail.body.length > 80 ? `${mail.body.slice(0, 60)}...` : mail.body}
          </Text>
        </Box>
      ))}
    </VStack>
  );
};

export default Display;
