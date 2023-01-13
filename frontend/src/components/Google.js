import { Box, Center, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/Google.svg'
import {MdContentCopy} from 'react-icons/md'
import {RiVolumeUpLine} from 'react-icons/ri'

export default function Google() {
  return (
    <Box w={'100%'} h={'100%'}>
      <Box h={'100%'}  contentEditable={true} outline={'none'} w={'100%'} p={'4%'}>

           
</Box>
   <Flex justifyContent={"space-around"} p={"3%"} w={'100%'}>
   <Image src={logo} />
   <Flex justifyContent={"space-evenly"} w={'20%'}>
     <Center cursor={'pointer'}>
     <MdContentCopy size={24}  color={'#A9A5A5'}/>
     </Center>
     <Center cursor={'pointer'}>
     <RiVolumeUpLine size={24} color={'#A9A5A5'}/>

     </Center>
   </Flex>
 </Flex>
    </Box>
  )
}
