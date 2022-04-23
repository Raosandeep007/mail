import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
const Display = () => {
  const { mails } = useSelector((store) => store);
  let [qrtag, setqrTag] = useSearchParams();
  let tag = qrtag.get("tag");
  let [qrsearch, setqrsearch] = useSearchParams();
  let search = qrsearch.get("search");
 
  const filteredMails = mails.filter((mail) => {
    if (tag) {
      if (tag == "All") {
        return mail;
      } else {
        return mail.tag === tag;
      }
    } else {
      return mail;
    }
  });
  const filteredMailsBySearch = filteredMails.filter((mail) => {
    if (search) {
      return mail.subject.toLowerCase().includes(search.toLowerCase());
    } else {
      return mail;
    }
  });

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
        <Link to={`/id?id=${mail.id}`} key={mail.id}>
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
