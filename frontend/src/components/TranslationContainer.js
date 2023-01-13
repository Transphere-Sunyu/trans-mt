import DeepL from './DeepL'
import Google from './Google'
import { Box, Flex} from "@chakra-ui/react";
import React, { useContext } from "react";
import Context from "../contexts/context";
import LanguageSelector from './LanguageSelector';

export default function TranslationContainer() {
  const { targetLanguage } = useContext(Context);

  return (
    <Box
      border={"solid"}
      borderWidth={2}
      borderRadius={"31px"}
      borderColor={"#F3843F"}
      width={`100%`}
      h={'auto'}
      id="trans-box"
      // mt={'5%'}
    >
      <Flex w={'100%'} p={'2%'} borderBottomColor={`#F3843F`} borderBottomWidth={2} >
        <LanguageSelector type={'target'} />
      </Flex>
      <Flex justifyContent={'space-evenly'} h={'auto'} w={'100%'}>

        <DeepL />
        <Box borderLeft={'solid'} borderLeftWidth={2} borderLeftColor={'#F3843F'} h={''}>

        </Box>
        <Google />
      </Flex>
    </Box>
  )
}
