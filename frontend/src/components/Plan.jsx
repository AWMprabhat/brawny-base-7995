import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./Pricing.module.css"
const Plan = () => {
  return (
    <Box mt="10rem">
        <Text fontWeight="bold" color="#749fce" fontSize="20px">Plan Comparison</Text>
        <Flex  cursor="pointer" _hover={{opacity:"0.5"}} className={styles.rounded} alignItems="center" justifyContent="center" p="0.5rem" color="white" m="auto" w="30%" bg="#00aeef" mt="3rem">
          <Text  >Save Upto Rs. 27000/mo with Bitrix24</Text>
        </Flex>
        <Flex  mt="3rem" m="auto" w="80%">
          <Box>
            <Image src='https://i.im.ge/2022/10/01/1RmAep.Screenshot-2.png'/>
            <Flex cursor="pointer"  alignItems="center" gap="2rem">
              <Box p="0.5rem" _hover={{backgroundColor:"#00aeef",color:"white"}}  className={styles.rounded} >ON-PREMISE FEATURES</Box>
              <Box p="0.5rem" _hover={{backgroundColor:"#00aeef",color:"white"}}  className={styles.rounded}>ON-PREMISE PRICE</Box>
            </Flex>
          </Box>
          <Box>
            <Image src='https://i.im.ge/2022/10/01/1Rm6VD.Screenshot-1.png'/>
          </Box>
        </Flex>

    </Box>
  )
}

export default Plan
