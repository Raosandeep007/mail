import { Box, StackDivider, VStack } from "@chakra-ui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTag } from "../Redux/action";
const Tagbar = () => {
  const dispatch = useDispatch();
  const TagNames = ["All", "inbox", "draft", "spam", "trash"];
  const [clicked, SetClicked] = useState(localStorage.getItem("tag") || 1);
  console.log(localStorage.getItem("tag"));
  let handleClick = (index) => {
    SetClicked(index);
    localStorage.setItem("tag", index);
    dispatch(setTag(TagNames[index]));
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
        <Fragment key={index}>
          {index === clicked ? (
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
              onClick={() => handleClick(index)}
            >
              {tag}
            </Box>
          )}
        </Fragment>
      ))}
    </VStack>
  );
};

export default Tagbar;
