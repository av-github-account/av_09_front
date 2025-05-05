import { 
  Box, 
  Flex, 
  Heading, 
  Button, 
  Input, 
  InputGroup, 
  InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const Header = () => {
  return (
    <Box width="80%" padding="4">
      This is the Box
    </Box>


    // <Box background="tomato" width="100%" padding="4" color="white">
    //   This is the Box
    // </Box>


    // <Box as="header" >
    //   <Flex as="ul" listStyleType="none" gap={6}>
    //     <li>Фильмы</li>
    //     <li>Сериалы</li>
    //     <li>Актеры</li>
    //   </Flex>      
    // </Box>


    // <Box as="header" bg="gray.800" color="white" py={4} px={8}>
    //   <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
    //     {/* Логотип */}
    //     <Heading as="h1" size="lg">
    //       Фильмограф
    //     </Heading>

    //     {/* Поиск (если есть в макете) */}
    //     <InputGroup maxW="400px" mx={4}>
    //       <InputLeftElement pointerEvents="none">
    //         <SearchIcon color="gray.300" />
    //       </InputLeftElement>
    //       <Input type="text" placeholder="Поиск фильмов..." bg="gray.700" border="none" />
    //     </InputGroup>

    //     {/* Навигация */}
    //     <Flex align="center" gap={6}>
    //       <Box as="nav">
    //         <Flex as="ul" listStyleType="none" gap={6}>
    //           <li>Фильмы</li>
    //           <li>Сериалы</li>
    //           <li>Актеры</li>
    //         </Flex>
    //       </Box>

    //       <Button colorScheme="blue">Войти</Button>
    //     </Flex>
    //   </Flex>
    // </Box>




  );
};