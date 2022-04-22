import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { SiGmail } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMail } from "../Redux/action";
const Search = () => {
  const { mails } = useSelector((store) => store);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const filteredMails = mails.filter((mail) =>
    mail.subject.toLowerCase().includes(search.toLowerCase())
  );
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const upadteData = (e) => {
    if (e.key === "Enter" && search !== "") {
      dispatch(setSearchMail(filteredMails));
    } else if (e.key === "Enter" && search === "") {
      dispatch(setSearchMail(mails));
    }
  };

  return (
    <Box
      position="fixed"
      padding="20px"
      display="flex"
      width="100%"
      justifyContent="space-between"
      columnGap={10}
      alignItems="center"
      bgColor="white"
      borderBottom="1px solid gray.200"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        gap={7}
        alignItems="center"
      >
        <SiGmail style={{ height: "50px", width: "50px" }} />
        <Text fontSize={"40px"} fontWeight="bold">
          MAIL
        </Text>
      </Box>
      <InputGroup>
        <InputLeftElement
          height="60px"
          pointerEvents="none"
          children={<FcSearch style={{ height: "30px", width: "30px" }} />}
        />
        <Input
          width="500px"
          variant="filled"
          placeholder="search mail"
          height="60px"
          palceholder="search mail"
          fontSize="20px"
          onChange={handleChange}
          onKeyUp={(e) => {
            upadteData(e);
          }}
        />
      </InputGroup>
    </Box>
  );
};

export default Search;
