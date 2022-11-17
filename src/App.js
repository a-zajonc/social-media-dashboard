import * as React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { DashboardComponent } from "./components";
import { theme } from ".";

const getFeed = async () => {
  const response = await fetch("http://localhost:3001/feed");

  return response.json();
};

function App() {
  const [feed, setFeed] = React.useState([]);

  React.useEffect(() => {
    const resolveFeed = async () => {
      const data = await getFeed();

      setFeed(data);
    };
    resolveFeed();
  }, []);

  console.log("dupa");
  return (
    <ChakraProvider theme={theme}>
      <Box
        backgroundColor="#1E202A"
        h="100vh"
        paddingInline="15%"
        paddingBlock="5%"
      >
        <DashboardComponent />
      </Box>
    </ChakraProvider>
  );
}

export default App;
