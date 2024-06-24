import "../styles/globals.css";
import dynamic from "next/dynamic";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Set the primary color to black
    },
  },
});

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Dercio Maduna - Frontend Developer</title>
        <meta
          name="description"
          content="Dercio Maduna's portfolio website showcasing his frontend development skills and projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/dercio.jpg" />
      </Head>
      <Component {...pageProps} />
      <AnimatedCursor
        innerSize={24}
        outerSize={48}
        color="1 , 1 , 1"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </ThemeProvider>
  );
}

export default MyApp;
