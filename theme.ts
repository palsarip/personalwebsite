import { extendTheme } from "@chakra-ui/react";

//using external google fonts
import "@fontsource/ntr";

const theme = extendTheme({
  fonts: {
    body: `'NTR', sans-serif;`,
  },
});

export default theme;
