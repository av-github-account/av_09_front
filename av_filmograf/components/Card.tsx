import { Box, Image, Text, Flex, Badge } from "@chakra-ui/react";
import React from "react";

interface MovieCardProps {
  title: string;
  duration: string;
  genre: string;
  imageUrl: string;
  rating: number;
}

export const Card = ({ title, duration, genre, imageUrl, rating }: MovieCardProps) => {
  return (
    <Box 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden"
      boxShadow="md"
      maxW="350px"
    >
      <Image src={imageUrl} alt={title} w="100%" h="200px" objectFit="cover" />
      
      <Box p="4">
        <Text fontWeight="bold" fontSize="xl" mb="2">{title}</Text>
        
        <Flex align="center" justify="space-between">
          <Badge colorScheme={getGenreColor(genre)} px="2" py="1" borderRadius="full">
            {genre}
          </Badge>
          <Flex align="center" gap="2">
            <ClockIcon />
            <Text fontSize="sm">{duration}</Text>
          </Flex>
        </Flex>
        
        <Flex mt="3" align="center">
          <StarIcon />
          <Text ml="1">{rating}/10</Text>
        </Flex>
      </Box>
    </Box>
  );
};

// Вспомогательная функция для цвета жанра
const getGenreColor = (genre: string) => {
  const colors: Record<string, string> = {
    "Боевик": "orange",
    "Драма": "gray",
    "Комедия": "purple",
    "Триллер": "green"
  };
  return colors[genre] || "blue";
};