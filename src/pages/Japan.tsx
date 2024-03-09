import Navbar from "@/Components/Navbar/Navbar";
import MainPageLayout from "@/Layout/MainPageLayout";
import {
  Image,
  Text,
  Box,
  Flex,
  Stack,
  Button,
  Spinner,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useRef, useState, useEffect } from "react";
type JapanProps = {};

const Japan: React.FC<JapanProps> = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const selectedFileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setLoading(true);
      setSelectedFile(files[0]);
    }
  };

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      <Head>
        <title>Team Ace - Japan</title>
      </Head>
      <Navbar />
      <MainPageLayout>
        <>
          {!selectedFile && (
            <Flex
              direction="column"
              justify="center"
              align="center"
              width="100%"
            >
              <Flex
                justify="center"
                align="center"
                p={20}
                border="1px dashed"
                borderColor="gray.400"
                width="100%"
                borderRadius={4}
                h={300}
              >
                <Button
                  variant="outline"
                  height="28px"
                  onClick={() => selectedFileRef.current?.click()}
                >
                  Upload
                </Button>
                <input
                  id="file"
                  ref={selectedFileRef}
                  type="file"
                  accept="image/png, image/svg+xml, video/mp4, video/x-m4v, image/jpeg, image/jpg, video/mkv, image/x-png,image/gif"
                  onChange={handleFileChange}
                  hidden
                />
              </Flex>
            </Flex>
          )}
          {selectedFile && (
            <Flex
              direction="column"
              justify="center"
              align="center"
              width="100%"
            >
              <Box mt={4}>
                <Text>Selected File:</Text>
                <Image src={URL.createObjectURL(selectedFile)} maxH={400} />
              </Box>
            </Flex>
          )}
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
            {" "}
            {loading && (
              <Flex justify="center" align="center" mt={4}>
                <Spinner size="lg" />
              </Flex>
            )}
            {!loading && selectedFile && (
              <Box mt={4}>
                <Text>Firebase Machine Learning Model not found</Text>
              </Box>
            )}
          </Flex>
        </>
      </MainPageLayout>
    </>
  );
};
export default Japan;
