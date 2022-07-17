import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

const Layout1 = () => {
  const varient = {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  };

  return (
    <Box border="4px solid black" mt="10px">
      <SimpleGrid
        gridTemplateColumns={{
          base: "1fr",
          lg: "0.5fr 1fr 0.5fr",
          xl: "0.5fr 1fr 0.5fr",
        }}
        p="0.5rem"
      >
        <Box
          w="100%"
          h={[200, 200, 200, 200]}
          bg="green.500"
          {...varient}
          area={"n"}
        >
          NAVBAR
        </Box>
        <Box
          w="100%"
          h={[300, 300, 300, 200]}
          bg="blue.500"
          {...varient}
          area={"c"}
        >
          Content
        </Box>
        <Box
          w="100%"
          h={[200, 200, 200, 200]}
          bg="red.500"
          {...varient}
          area={"w"}
        >
          Widget
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Layout1;
