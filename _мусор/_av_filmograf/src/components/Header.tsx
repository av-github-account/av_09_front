import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
  return (
    <Box bg="gray.800" color="white" px={6} py={4} mb={4}>
      <Flex align="center" justify="space-between">
        <Heading size="md">Фильмограф</Heading>
        <Flex gap={4}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'underline' }}>
            Главная
          </Link>
          <Link as={RouterLink} to="/favorites" _hover={{ textDecoration: 'underline' }}>
            Избранное
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
