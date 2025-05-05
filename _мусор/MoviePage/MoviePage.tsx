// src/pages/MoviePage.tsx
import { Box, Heading, Image, Text, VStack, HStack, Badge } from '@chakra-ui/react';

export const MoviePage = () => {
  return (
    <Box maxW="1000px" mx="auto" p={4}>
      <HStack align="start" spacing={6}>
        <Image
          src="https://via.placeholder.com/300x450"
          alt="Постер фильма"
          borderRadius="xl"
          boxShadow="lg"
        />
        <VStack align="start" spacing={4} flex="1">
          <Heading size="xl">Название фильма</Heading>
          <HStack spacing={2}>
            <Badge colorScheme="green">2023</Badge>
            <Badge colorScheme="purple">Драма</Badge>
            <Badge colorScheme="blue">2ч 10м</Badge>
          </HStack>
          <Text fontSize="md">
            Описание фильма. Здесь будет краткое содержание или синопсис, который даёт представление о сюжете.
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default MoviePage;
