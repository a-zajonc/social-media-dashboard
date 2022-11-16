import { ChakraProvider } from "@chakra-ui/react";
import { DashboardComponent } from "./components";

function App() {
  return (
    <ChakraProvider>
      <DashboardComponent />
    </ChakraProvider>
  );
}

export default App;
