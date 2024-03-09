import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FFFFFF",
      200: "#FFB5345B",
    },
  },
  fonts: {
    heading: "outfit",
    body: "outfit",
  },
  styles: {
    global: () => ({
      // body: {
      //   backgroundImage: "url('/images/Deep Waves.svg')",
      // },
      body: {
        bg: "#FFFFFF",
      },
    }),
  },
  components: {
    Button,
  },
});
