import { Avatar, Box, Container, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
const MailBody = () => {
  const { mails } = useSelector((store) => store);
  let [qrid, setqrId] = useSearchParams();
  let id = qrid.get("id");
  const filteredMails = mails.filter((mail) => mail.id == id);

  return (
    <VStack
      w="90%"
      display={"flex"}
      justifyContent="start"
      alignItems="start"
      marginTop={"20px"}
      marginLeft={200}
      paddingTop={20}
      padding={20}
    >
      {filteredMails.map((mail) => (
        <Box
          key={mail.id}
          height="80vh"
          p={2}
          rounded="md"
          fontSize="lg"
          w="100%"
        >
          <Text fontWeight="semibold" fontSize="40px" textTransform="uppercase">
            Subject :- {mail.subject}
          </Text>
          <Box display="flex" flexDirection="row" alignItems="center" gap={5}>
            <Avatar />{" "}
            <Text
              fontSize="20px"
              fontWeight="semibold"
              textTransform="uppercase"
            >
              user ID: - {mail.id}
            </Text>
          </Box>
          <Text
            fontSize="20px"
            fontWeight="semibold"
            textTransform="uppercase"
            padding={40}
          >
            {mail.body}
          </Text>
        </Box>
      ))}
    </VStack>
  );
};

export default MailBody;
