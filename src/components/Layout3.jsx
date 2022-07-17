import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";

const Layout3 = () => {
  return (
    <Stack p="1rem" fontSize={30} border="4px solid black" mb="10px">
      <Flex gap={2} direction={{ base: "column", lg: "row", xl: "row" }}>
        <Box bg="red.400" w="100%" h={[200, 100, 100]}>
          1
        </Box>
        <Box bg="red.400" w="100%" h={[200, 100, 100]}>
          2
        </Box>
      </Flex>
      <Box w="100%" bg="blue.400" h="200">
        3
      </Box>
      <Flex gap={2} direction={{ base: "column", lg: "row", xl: "row" }}>
        <Box bg="green.400" w="100%" h={[200, 100, 100]}>
          4
        </Box>
        <Box bg="green.400" w="100%" h={[200, 100, 100]}>
          5
        </Box>
        <Box
          bg="green.400"
          w="100%"
          h={[200, 100, 100]}
          display={{ base: "none", sm: "none", xl: "block" }}
        >
          6
        </Box>
      </Flex>
    </Stack>
  );
};

export default Layout3;
