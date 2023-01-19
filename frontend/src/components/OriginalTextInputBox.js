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
  Spacer,
  FormLabel,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import Context from "../contexts/context";
import {
  BiChevronDown,
  BiCrosshair,
  BiExit,
  BiWindowClose,
  BiX,
} from "react-icons/bi";
import LanguageSelector from "./LanguageSelector";
import debounce from "lodash.debounce";
import { Switch } from "@chakra-ui/react";

export default function OriginalTextInputBox() {
  const {
    originalLanguage,
    originalText,
    setOriginalText,
    setShowDiff,
    showDiff,
  } = useContext(Context);

  const handleText = debounce((e) => {
    setOriginalText(e.target.innerText);
  }, 1000);
  const handleRemoveText = () => {
    const editor = document.getElementById("editor-content");
    editor.innerText = "";
    setOriginalText(null);
  };

  return (
    <Box
      border={"solid"}
      borderWidth={2}
      borderRadius={"31px"}
      borderColor={"#F3843F"}
      width={`100%`}
      h={"fit-content"}
      id="input-box"
      marginBottom={"7%"}
      minH={`30%`}
    >
      <Flex
        w={"auto"}
        p={"2%"}
        borderBottomColor={`#F3843F`}
        borderBottomWidth={2}
      >
        <LanguageSelector type={"original"} />
        <Spacer />
        {originalText && (
          <Flex>
            <FormLabel color={'gray.400'}>
    Compare Translations
  </FormLabel>
            <Switch
          colorScheme={"orange"}
          id="diff-switcher"
          value={showDiff}
          isChecked={showDiff}
          onChange={(e) => setShowDiff(!showDiff)}
        />
          <Flex ml={5} cursor={"pointer"} onClick={handleRemoveText}>
            

            <BiX color="black" size={24} />
          </Flex>
          </Flex>
        )}
      </Flex>
      <Box
        p={"4%"}
        h={"174px"}
        contentEditable={true}
        onInput={handleText}
        outline={"none"}
        overflowY={"auto"}
        id="editor-content"
      ></Box>
    </Box>
  );
}
