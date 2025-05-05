import { useParams } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/react';
import Header from '../components/Header';

export default function MoviePage() {
  const { id } = useParams();

  return (
    <Box p={4}>
      <Header />
      <Heading>Фильм ID: {id}</Heading>
    </Box>
  );
}
