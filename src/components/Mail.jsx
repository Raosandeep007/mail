import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Display from "./Display";
import Search from "./Search";
import Tagbar from "./Tagbar";

const Mail = ({ AllMail }) => {
  return (
    <div style={{ width: "100vw" }}>
      <Search />
      <Box
        display="grid"
        gridTemplateColumns="auto auto"
        gridGap="10px"
        w="100%"
        p="10px"
      >
        <Tagbar />
        <Display AllMail={AllMail} />
      </Box>
    </div>
  );
};

export default Mail;
