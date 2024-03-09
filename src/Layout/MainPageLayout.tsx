import React from "react";
import { Box, Flex } from "@chakra-ui/react";

interface MainPageLayoutProps {
  children: React.ReactNode;
}

// Assumes array of two children are passed
const MainPageLayout: React.FC<MainPageLayoutProps> = ({ children }) => {
  return (
    <>
      <Flex
        height={"79vh"}
        justify="center"
        align={"center"}
        pr={{ lg: 25 }}
        // borderWidth={1}
        // borderColor={"purple"}
      >
        {/* Left Content */}
        <Flex
          display={{ base: "flex", md: "flex", lg: "flex" }}
          width="50%"
          justify="center"
          // borderWidth={1}
          // borderColor={"black"}
          ml={61}
          mr={61}
        >
          <Flex
            direction="column"
            // width={{ base: "100%", md: "100%" }}
            width={"100%"}
            // mr={{ base: 0, md: 6 }}
            mr={{ base: 0 }}
          >
            {children && children[0 as keyof typeof children]}
          </Flex>
        </Flex>

        {/* Right Content */}
        <Box
          display={{ base: "none", md: "none", lg: "flex" }}
          flexDirection="column"
          flexGrow={1}
          width={"50%"}
          // borderWidth={1}
          // borderColor={"red"}
        >
          {children && children[1 as keyof typeof children]}
        </Box>
      </Flex>
    </>
  );
};

export default MainPageLayout;
