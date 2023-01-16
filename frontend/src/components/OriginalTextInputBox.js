import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Center,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import Context from "../contexts/context";
import { BiChevronDown } from "react-icons/bi";
import LanguageSelector from "./LanguageSelector";
import debounce from "lodash.debounce";

export default function OriginalTextInputBox() {
  const { originalLanguage, originalText, setOriginalText } = useContext(Context);

  const handleText = debounce((e) => {
    setOriginalText(e.target.innerText);
  }, 1000);
  
  return (
    <Box
      border={"solid"}
      borderWidth={2}
      borderRadius={"31px"}
      borderColor={"#F3843F"}
      width={`100%`}
      h={"fit-content"}
      id="input-box"
      marginBottom={'7%'}
      minH={`30%`}
    >
      <Flex
        w={"auto"}
        p={"2%"}
        borderBottomColor={`#F3843F`}
        borderBottomWidth={2}
      >
        <LanguageSelector type={"original"} />
      </Flex>
      <Box
        p={"4%"}
        h={"174px"}
        contentEditable={true}
        onInput={handleText}
        outline={"none"}
        overflowY={'auto'}
        
      ></Box>
    </Box>
  );
}
