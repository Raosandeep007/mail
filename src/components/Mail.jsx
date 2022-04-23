import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Display from "./Display";
import MailBody from "./MailBody";
import Search from "./Search";
import Tagbar from "./Tagbar";

const Mail = () => {
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
        <Routes>
          <Route path="/" element={<Display />}></Route>
          <Route path="/id" element={<MailBody />}></Route>
          <Route path="/tag" element={<Display />}></Route>
          <Route path="/search" element={<Display />}></Route>
        </Routes>
      </Box>
    </div>
  );
};

export default Mail;
