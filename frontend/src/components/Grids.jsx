import React from 'react'
import { Grid, GridItem,Box, Image, Button,Text, Center } from '@chakra-ui/react';
const Grids = () => {
  return (
    <Center mt="2rem">
    <Grid cursor="pointer"  h="75rem" w="75%" templateColumns='repeat(4, 1fr)' gap={6}>
    <GridItem borderRadius="1.5rem" bg="#f5fdd6" w='100%'    > 
        <Image  src='https://i.im.ge/2022/09/30/1cLtyK.Screenshot-2.png' />
        <Image src='https://i.im.ge/2022/09/30/1cLkZf.Screenshot-6.png'/> 
        <Box bg="#f5fdd6">
        <Button display="inlineBlock" color="white" bg="#a3cd00">Register Free</Button>
        </Box>
        <Image src="https://i.im.ge/2022/09/30/1c0VEW.Screenshot-14.png"/>
        
    </GridItem>
    <GridItem w='100%'  >
    <Box h="9%">
      <Image h="100%" w="100%" src='https://i.im.ge/2022/09/30/1cicby.Screenshot-3.png'/>
      </Box>
      <Image src='https://i.im.ge/2022/09/30/1ciV1K.Screenshot-11.png'/>
      <Box bg="#e7f9ff ">
      <Button padding="1rem" w="45%" color="white" bg="#21bdee">Buy</Button>
      </Box>
      <Image src='https://i.im.ge/2022/09/30/1c0ADY.Screenshot-12.png'/>
      <Image src='https://i.im.ge/2022/09/30/1c0YNq.Screenshot-13.png'/>
    </GridItem>
    <GridItem  w='100%' >
      <Box h="9%">
      <Image h="100%" w="100%" src='https://i.im.ge/2022/09/30/1c9mh8.Screenshot-4.png'/>
      </Box>
      <Image src='https://i.im.ge/2022/10/01/1cmWOT.Screenshot-22.png'/>
      <Box bg="#e7f9ff ">
      <Button padding="1rem" w="45%" color="white" bg="#21bdee">Buy</Button>
      </Box>
      <Image src='https://i.im.ge/2022/10/01/1cmvsy.Screenshot-23.png'/>
      <Image src='https://i.im.ge/2022/09/30/1cjfJY.Screenshot-19.png'/>
      <Image mt="-9rem" src='https://i.im.ge/2022/09/30/1cmlkT.Screenshot-20.png'/>
      
    </GridItem>
    <GridItem bg="#e7f9ff" w='100%'>
      <Box h="9%">
      <Image h="100%" w="100%" src='https://i.im.ge/2022/10/01/1cwuyY.Screenshot-5.png'/>
      </Box>
      <Image src='https://i.im.ge/2022/10/01/1cwtAy.Screenshot-24.png'/>
      <Box bg="#e7f9ff ">
        <Button padding="1rem" w="45%" color="white" bg="#21bdee">Buy</Button>
      </Box>
      <Image src='https://i.im.ge/2022/10/01/1cNj4a.Screenshot-25.png'/>
      <Image  src='https://i.im.ge/2022/10/01/1cNgyM.Screenshot-26.png'/>
    </GridItem>
    
</Grid>

</Center>

  )
}

export default Grids
