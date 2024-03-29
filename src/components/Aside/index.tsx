import React from 'react';
import { Avatar, Box, Flex, Slide, useColorModeValue } from '@chakra-ui/react';

import { ToggleThemeButton } from 'components/ToggleThemeButton';
import { data, links } from './content';

const Aside = () => {
  const bg = useColorModeValue('blue.700', 'blue.900');

  return (
    <Slide direction="left" in={true}>
      <Flex
        maxWidth="350px"
        w="100%"
        bg={bg}
        position="sticky"
        top={0}
        bottom={0}
        h="100vh"
        alignItems="center"
        justifyContent="center"
        gap={8}
        as="aside"
        flexDirection="column"
        padding={5}
        textAlign="center"
      >
        <ToggleThemeButton />
        <Box width="160px" height="160px">
          <Avatar
            size="full"
            name={data.name}
            src={data.avatar}
            border="0.5rem solid rgba(255, 255, 255, 0.205)"
            bg="rgba(255, 255, 255, 0.205)"
          />
        </Box>

        <Flex as="nav" flexDirection="column" gap={4} fontSize="lg">
          {links.map(({ label, href }) => (
            <Box
              key={href}
              as="a"
              href={href}
              color="white"
              opacity={0.5}
              textTransform="uppercase"
              fontWeight={600}
              transition="all 0.3s ease-in-out"
              _hover={{ opacity: 1 }}
            >
              {label}
            </Box>
          ))}
        </Flex>
      </Flex>
    </Slide>
  );
};

export default Aside;
