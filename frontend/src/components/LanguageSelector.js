import React, { useContext } from 'react'
import {
  
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Center,
  IconButton,
  SimpleGrid, } from "@chakra-ui/react";
  import { BiChevronDown } from "react-icons/bi"
  import Context from "../contexts/context";
  import {RiTranslate2} from 'react-icons/ri'
import {TailSpin} from 'react-loader-spinner'

export default function LanguageSelector({type}) {
  const { originalLanguage,loading , setTargetLanguage , setOriginalLanguage , targetLanguage , langList} = useContext(Context);

  return (
    <Menu >
          <MenuButton
          
            // icon={<RiTranslate2 />}
            // as={IconButton}
            
                        p={'1%'}
            transition="all 0.2s"
            borderRadius="md"
            // _hover={{ bg: "gray.400" }}
            // _expanded={{ bg: "#F3843F" }}
            _focus={{ boxShadow: "none" }}
            w={'fit-content'}
            
            
            
          >
              
             <Center>
              
             { type  === 'original' ? originalLanguage?.name : targetLanguage.name } { type === 'original' && !originalLanguage.name && 'Select Language' }  { type === 'target' && !targetLanguage.name && 'Select Language' } <BiChevronDown />
             </Center>
          </MenuButton>
          <TailSpin
                    height="30"
                    width="30"
                    color="#f3843f"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass="loader"
                    visible={loading}
                  />
          <MenuList minWidth={[300,100,1100,1100,1100]} p={'3%'}>
          <SimpleGrid  minChildWidth='70px' spacing='30px'>

          {
            type === 'original' && langList && langList.source_langs.map( (lang,i) =>{
              return(
                
                <MenuItem key={i} onClick={() => setOriginalLanguage(lang)}>{lang.name}</MenuItem>

              )
           })}  
           
            {
              type === 'target' && langList && langList.target_langs.map( (lang,i) =>{
               return(
                 
                 <MenuItem key={i} onClick={() => setTargetLanguage(lang)}>{lang.name}</MenuItem>
 
               )
            })}
           </SimpleGrid>
          </MenuList>
        </Menu>
  )
}
