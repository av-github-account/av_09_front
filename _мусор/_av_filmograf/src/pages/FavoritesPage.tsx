import { Box, Heading } from '@chakra-ui/react';
import Header from '../components/Header';

export default function FavoritesPage() {
  return (
    <Box p={4}>
      <Header />
      <Heading>Избранное</Heading>
    </Box>
  );
}
