import {
  Box,
  Flex,
  HStack,
  Link,
  Heading,
  Checkbox,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

export default function HomePage() {
  return (
    <Box bg="gray.50" w="1441px" mx="auto">
      {/* Обёртка страницы */}
      <Box w="1172px" mx="auto">
        {/* Шапка */}
        <Flex as="header" py={4} justify="flex-start" gap={8}>
          <Link fontWeight="bold">Все фильмы</Link>
          <Link>Избранное</Link>
          <Link>Добавить фильм</Link>
        </Flex>

        {/* Плашка фильтрации */}
        <Flex
          bg="gray.200"
          justify="space-between"
          align="center"
          px={4}
          py={3}
          mb={6}
        >
          <Heading size="md">Фильмы</Heading>
          <HStack spacing={4}>
            <Checkbox colorScheme="blue">Боевик</Checkbox>
            <Checkbox colorScheme="blue">Триллер</Checkbox>
            <Checkbox colorScheme="blue">Комедия</Checkbox>
            <Checkbox colorScheme="blue">Драмма</Checkbox>
          </HStack>
        </Flex>

        {/* Каталог фильмов */}
        <SimpleGrid columns={3} spacing={6}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Box
              key={i}
              w="350px"
              h="325px"
              bg="white"
              borderRadius="xl"
              boxShadow="md"
            />
          ))}
        </SimpleGrid>
      </Box>

      {/* Футер */}
      <Box bg="black" color="white" textAlign="center" py={6} mt={12}>
        <Text fontSize="lg" fontWeight="bold">
          Фильмограф
        </Text>
      </Box>
    </Box>
  );
}


// import { Box, Heading } from '@chakra-ui/react';
// import Header from '../components/Header';

// export default function HomePage() {
//   return (
//     <Box p={4}>
//       <Header />
//       <Heading>Главная</Heading>
//       {/* Сюда позже добавим карточки фильмов */}
//     </Box>
//   );
// }
