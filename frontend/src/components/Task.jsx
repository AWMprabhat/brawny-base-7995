import { ChevronRightIcon, Icon, SearchIcon, StarIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import styles from "./Task.module.css"
import { MdSettings } from 'react-icons/md'
import NavBar from './NAVandSIDEbar/NavBar'
import RightSlider from './NAVandSIDEbar/RightSlider'

import CreateTask from './CreateTask'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
const Task = () => {
  const [task,setTask]=useState([])
  const token=localStorage.getItem("token")
  const name=localStorage.getItem("userName")
  const newUser=name.split("@")[0]

    useEffect(()=>{
      fetch("https://fathomless-meadow-29043.herokuapp.com/task", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        
        setTask(res)
      });
    },[task])
    console.log(task)
  return (
    <Box className={styles.bgimage}>
        <NavBar/>
        <Flex gap="4rem">
          <RightSlider/>
          <Box  w="80%">
      
 
      <Flex mb="10px" p="1.5rem" borderRadius="10px" bg="white" alignItems="center" gap="2rem">
        <Box>Tasks <ChevronRightIcon/></Box>
        
        <Box>Projects</Box>
        <Box>Scrum</Box>
        <Box>Efficiency</Box>
        <Flex justifyContent="center" alignItems="center">
        <Box>More</Box>
        <Select className={styles.options} variant="unstyled" w="2rem">
            <option>Involvement</option>
            <option>Reports</option>
            <option>Tempelates</option>
            <option>Recycle Bins</option>
        </Select>
        </Flex>

    </Flex>

    <Flex gap="2rem">
        <Box color="white" fontWeight="thin" fontSize="25px"  w="14rem" mr="2rem">My Task <StarIcon fontSize="19px" color="gray"></StarIcon></Box>  
        <Flex borderRadius="6px" h="2.5rem" justifyContent="center" alignItems="center" bg="#b4e524"  gap="3rem">
        
            <Box bg={styles.colors}><CreateTask/></Box>
        
          <Select variant="unstyled" w="0px"></Select>
          
        </Flex>
        <InputGroup>
      
    <Input bg="white" placeholder='Filter and search' />
    <InputRightAddon children={<SearchIcon ></SearchIcon>} />
  </InputGroup>
  <Box h="3rem" w="3rem" bg="#258ad2" >
  <Icon color="white" w={7} h={7}  as={MdSettings} />
  </Box>

    </Flex>
    <Box>
    
      <Box border="1px solid black" w="100%" h="auto" className={styles.opa}>
      <TableContainer>
    <Table  p="1rem" bg="white" variant='simple'>
    
    <Thead>
      <Tr>
        <Th>Responsible Person</Th>
        <Th>Start Time</Th>
        <Th>End Time</Th>
        <Th>Created By</Th>
        <Th>Task</Th>
         
      </Tr>
    </Thead>
    <Tbody>
      {task.length>0 && task.map((ele)=>{
        return(
          <Tr key={ele._id}>
          <Td>{ele.employeeName}</Td>
          <Td>{ele.startTime}</Td>
          <Td >{ele.endTime}</Td>
          <Td >{newUser}</Td>
          <Td >{ele.taskName}</Td>
          
          
        </Tr>
        )
      })}
      
      
    </Tbody>
    
  </Table>
</TableContainer>
      </Box>
      </Box>
    </Box>
        </Flex>
    </Box>
    
  )
}

export default Task
