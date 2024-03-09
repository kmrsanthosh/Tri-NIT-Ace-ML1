import Navbar from "@/Components/Navbar/Navbar";
import MainPageLayout from "@/Layout/MainPageLayout";
import { Box, Flex, Image, Select, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

type AboutUsProps = {};

const AboutUs: React.FC<AboutUsProps> = () => {
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
            textAlign="center"
          >
            <Text mb={10} fontWeight={600} fontSize={{ base: 36, md: 54 }}>
              Ace
            </Text>
            <Text fontSize={{ base: 16, md: 20 }} align={"justify"}>
              We're a dynamic team of four students from Thiagarajar College of
              Engineering, specializing in computer science and business
              systems. United by our passion for innovation, we're on a mission
              to build a global platform for real-time road damage detection.
              Together, we're combining our technical expertise with business
              acumen to create safer roads and smarter cities.{" "}
            </Text>
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
            <Image
              src="/images/3.svg"
              boxSize={{ base: 200, md: 425 }}
              borderRadius={15}
            />
          </Flex>
        </>
      </MainPageLayout>
    </>
  );
};
export default AboutUs;
