import { Box, StackDivider, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
const Tagbar = () => {
  const TagNames = ["All", "inbox", "draft", "spam", "trash"];
  let [qrtag, setqrTag] = useSearchParams();
  let tag = qrtag.get("tag");
  const [clicked, SetClicked] = useState(tag || "All");

  let handleClick = (tag) => {
    SetClicked(tag);
  };

  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      align="stretch"
      w="10%"
      bgColor="white"
      height="100%"
      display={"flex"}
      alignItems="center"
      padding="10px"
      marginTop={20}
      position="fixed"
    >
      {TagNames.map((tag, index) => (
        <Link key={index} to={`/tag?tag=${tag}`}>
          {tag === clicked ? (
            <Box
              key={tag}
              bg="gray.600"
              color="gray.100"
              p={2}
              rounded="md"
              fontSize="sm"
              w="100%"
              textAlign="center"
              fontWeight="semibold"
              textTransform="uppercase"
              cursor="pointer"
            >
              {tag}
            </Box>
          ) : (
            <Box
              key={tag}
              bg="gray.100"
              color="gray.600"
              p={2}
              rounded="md"
              fontSize="sm"
              w="100%"
              cursor="pointer"
              textAlign="center"
              fontWeight="semibold"
              textTransform="uppercase"
              _hover={{ bg: "gray.200" }}
              onClick={() => handleClick(tag)}
            >
              {tag}
            </Box>
          )}
        </Link>
      ))}
    </VStack>
  );
};

export default Tagbar;
