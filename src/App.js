import * as React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { DashboardComponent } from "./components";
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
    <Box
      paddingInline={{ sm: "7%", lg: "15%" }}
      paddingBlock={{ sm: "5%", lg: "5%" }}
    >
      <UserData.Provider value={{ feed, overview }}>
        <DashboardComponent />
      </UserData.Provider>
    </Box>
  );
}

export default App;
