import Navbar from "@/Components/Navbar/Navbar";
import MainPageLayout from "@/Layout/MainPageLayout";
import { Box, Flex, Image, Select, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

type indexProps = {};

const Index: React.FC<indexProps> = () => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
    switch (event.target.value) {
      case "India":
        router.push("/India");
        break;
      case "Japan":
        router.push("/Japan");
        break;
      case "Czech":
        router.push("/Czech");
        break;
      default:
        router.push("/");
        break;
    }
  };

  return (
    <>
      <Head>
        <title>Tri-NIT 3.0 - Team Ace</title>
      </Head>
      <Navbar />
      <MainPageLayout>
        <>
          <Flex
            direction={"column"}
            justify={"center"}
            minH={{ base: 450, md: 600 }}
            justifyContent={"space-evenly"}
          >
            <Text fontSize={{ base: 24, md: 38 }} fontWeight={600}>
              Real Time Damage Detection
            </Text>
            <Text fontSize={{ base: 20, md: 28 }} mt={20} fontWeight={600}>
              Select The Country
            </Text>
            <Select
              variant="outline"
              placeholder="Select Country"
              mt={21}
              w={{ base: "100%", md: 299 }}
              h={79}
              fontSize={23}
              borderRadius={15}
              onChange={handleCountryChange}
            >
              <option value="India">India</option>
              <option value="Japan">Japan</option>
              <option value="Czech">Czech</option>
            </Select>
            <Box
              mt={21}
              bg={"black"}
              textColor={"white"}
              borderRadius={20}
              h={69}
              w={{ base: "100%", md: 270 }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              cursor={"pointer"}
            >
              <Text fontSize={20} align={"center"}>
                Check Your Road
              </Text>
            </Box>
          </Flex>
        </>
        <>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify={"center"}
            minH={{ base: 450, md: 600 }}
            justifyContent={"space-evenly"}
            align={"center"}
            flexWrap="wrap"
          >
            <Stack align={"center"} mb={{ base: 6, md: 0 }}>
              <Image
                src="/images/1.jpeg"
                boxSize={{ base: 200, md: 299 }}
                borderRadius={15}
              />
              <Text>Finding ruts!</Text>
            </Stack>
            <Stack align={"center"}>
              <Image
                src="/images/2.jpeg"
                boxSize={{ base: 200, md: 299 }}
                borderRadius={15}
              />
              <Text>Finding cracks!</Text>
            </Stack>
          </Flex>
        </>
      </MainPageLayout>
    </>
  );
};

export default Index;
