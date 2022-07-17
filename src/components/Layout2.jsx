import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const Layout2 = () => {
  const css = {
    textAlign: "center",
    fontSize: "30px",
  };
  return (
    <Grid
      border="4px solid black"
      mb="2rem"
      mt="2rem"
      p="2rem"
      gap={5}
      templateAreas={{
        base: `"one"
                  "two"
                  "three"`,
        xl: `"one two"
               "three two"`,
      }}
      gridTemplateRows={{
        base: "100px 100px 100px",
        xl: "100px 1fr",
      }}
      gridTemplateColumns={{
        base: "1fr",
        sm: "1fr",
        xl: "1fr 0.5fr",
      }}
    >
      <GridItem {...css} area={"one"} bg="orange.300">
        1
      </GridItem>
      <GridItem {...css} area={"two"} bg="green.300">
        2
      </GridItem>
      <GridItem {...css} area={"three"} bg="blue.300">
        3
      </GridItem>
    </Grid>
  );
};

export default Layout2;
