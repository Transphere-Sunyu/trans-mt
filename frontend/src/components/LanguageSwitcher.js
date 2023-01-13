import { Center, Circle } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { HiArrowsUpDown } from 'react-icons/hi2'
import Context from '../contexts/context'

export default function LanguageSwitcher() {
    const {originalLanguage, setOriginalLanguage,setTargetLanguage , targetLanguage} = useContext(Context)
 
    const swapLanguages = () => {
        setOriginalLanguage(targetLanguage);
        setTargetLanguage(originalLanguage);

    }
  return (
    <Center>
        <Circle onClick={swapLanguages} cursor={'pointer'} bg={'#000'} size={9}>
        
        <HiArrowsUpDown size={24} color={"#F3843F"} />
    </Circle>
    </Center>
  )
}
