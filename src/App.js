import * as React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { DashboardComponent } from "./components";
import { UserData } from "./context";

const getFeed = async () => {
  const response = await fetch("/api/feed");

  return response.json();
};

const getOverview = async () => {
  const response = await fetch("/api/overview");

  return response.json();
};

function App() {
  const [feed, setFeed] = React.useState([]);
  const [overview, setOverview] = React.useState([]);

  React.useEffect(() => {
    const resolveData = async () => {
      const [feedData, overviewData] = await Promise.all([
        getFeed(),
        getOverview(),
      ]);
      setFeed(feedData);
      setOverview(overviewData);
    };
    resolveData();
  }, []);

  return (
    <Box
      bgColor={useColorModeValue("#f8f9fe", "#1F212E")}
      h="300px"
      position="relative"
      borderBottomRadius="20px"
    >
      <Box
        paddingInline={{ sm: "7%", lg: "15%" }}
        paddingBlock={{ sm: "5%", lg: "3%" }}
      >
        <UserData.Provider value={{ feed, overview }}>
          <DashboardComponent />
        </UserData.Provider>
      </Box>
    </Box>
  );
}

export default App;
