import { Box, Container, StackDivider, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Display = () => {
  const { mails, tags, searchTerm } = useSelector((store) => store);
  const filteredMails = mails.filter((mail) => {
    if (tags == "All") {
      return mail;
    } else {
      return mail.tag === tags;
    }
  });
  const filteredMailsBySearch = filteredMails.filter((mail) =>
    mail.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      {filteredMailsBySearch.map((mail) => (
        <Link to={`/${mail.id}`} key={mail.id}>
          <Box
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
              {mail.body.length > 80
                ? `${mail.body.slice(0, 60)}...`
                : mail.body}
            </Text>
          </Box>
        </Link>
      ))}
    </VStack>
  );
};

export default Display;
