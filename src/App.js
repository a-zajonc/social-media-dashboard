import * as React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { DashboardComponent } from "./components";
import { theme } from ".";
import { UserData } from "./context";

const getFeed = async () => {
  const response = await fetch("http://localhost:3001/feed");

  return response.json();
};

const getOverview = async () => {
  const response = await fetch("http://localhost:3001/overview");

  return response.json();
};

function App() {
  const [feed, setFeed] = React.useState([]);
  const [overview, setOverview] = React.useState([]);

  React.useEffect(() => {
    const resolveFeed = async () => {
      const feedData = await getFeed();
      const overviewData = await getOverview();
      setFeed(feedData);
      setOverview(overviewData);
    };
    resolveFeed();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box
        backgroundColor="#1E202A"
        h="100vh"
        paddingInline="15%"
        paddingBlock="5%"
      >
        <UserData.Provider value={{ feed, overview }}>
          <DashboardComponent />
        </UserData.Provider>
      </Box>
    </ChakraProvider>
  );
}

export default App;
