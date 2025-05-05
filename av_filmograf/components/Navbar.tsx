import { HStack, Link } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <HStack spacing="6">
      <Link fontWeight="medium" color="blue.500">Все фильмы</Link>
      <Link fontWeight="medium">Избранное</Link>
      <Link fontWeight="medium">Добавить фильм</Link>
    </HStack>
  );
};