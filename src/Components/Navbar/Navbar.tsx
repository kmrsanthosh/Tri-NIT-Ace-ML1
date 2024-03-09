import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();

  const isActivePage = (path: string) => {
    return router.pathname === path;
  };

  return (
    <>
      <Flex
        align={"center"}
        mt={{ base: 4, md: 12 }}
        pl={{ base: 4, md: 16 }}
        mb={{ base: 8, md: 12 }}
        height={{ base: "auto", md: "90px" }}
        w={"100%"}
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
      >
        {/* Left Side */}
        <Flex direction={"column"} w={{ base: "100%", md: "50%" }}>
          <Text fontSize={{ base: 24, md: 52 }} fontWeight={"600"}>
            {" "}
            Team Ace
          </Text>
          <Text fontSize={{ base: 14, md: 21 }}>
            {" "}
            Road Health at Your Fingertips
          </Text>
        </Flex>

        {/* Right Side */}
        <Flex
          justifyContent={"space-evenly"}
          w={{ base: "100%", md: "50%" }}
          mt={{ base: 4, md: 0 }}
        >
          <Text
            cursor={"pointer"}
            fontSize={{ base: 14, md: 19 }}
            fontWeight={"600"}
            _hover={{ textDecoration: "underline" }}
            textDecoration={isActivePage("/") ? "underline" : "none"}
            onClick={() => router.push("/")}
          >
            Home
          </Text>
          <Text
            cursor={"pointer"}
            fontSize={{ base: 14, md: 19 }}
            fontWeight={"600"}
            _hover={{ textDecoration: "underline" }}
            textDecoration={isActivePage("/AboutUs") ? "underline" : "none"}
            onClick={() => router.push("/AboutUs")}
          >
            About Us
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
