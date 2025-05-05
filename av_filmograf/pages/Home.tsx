import { Grid, Heading, Flex, Box } from "@chakra-ui/react";
import { Card } from "../components/Card";
import React from "react";
import { Navbar } from "../components/Navbar";

const movies = [
  {
    id: 1,
    title: "Матрица",
    duration: "136 мин",
    genre: "Боевик",
    imageUrl: "/images/matrix.jpg",
    rating: 8.7
  },
  // ...остальные фильмы
];

export const Home = () => {
  return (
    <Box p="8">
      <Flex justify="space-between" mb="8">
        <Heading as="h1" size="2xl">Фильмограф</Heading>
        <Navbar />
      </Flex>

      <Grid 
        templateColumns="repeat(auto-fill, minmax(350px, 1fr))" 
        gap="6"
      >
        {movies.map(movie => (
          <Card key={movie.id} {...movie} />
        ))}
      </Grid>
    </Box>
  );
};