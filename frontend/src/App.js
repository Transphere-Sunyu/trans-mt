import * as React from "react";
import './index.css'

// 1. import `ChakraProvider` component
import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import OriginalTextInputBox from "./components/OriginalTextInputBox";
import ContextWrapper from "./components/ContextWrapper";
import TranslationContainer from "./components/TranslationContainer";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <ContextWrapper>
        <Container centerContent display={'flex'} flexDirection={'column'} maxW="4xl" h={'100%'} pt={`5%`}>
          <OriginalTextInputBox />
          <LanguageSwitcher />
          <TranslationContainer />
        </Container>
      </ContextWrapper>
    </ChakraProvider>
  );
}
