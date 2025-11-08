import { Box } from "@chakra-ui/react";
import TopNav from "./components/TopNav.jsx";
import AskHankLanding from "./components/AskHankLanding.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

const App = () => {
  return (
    <Box bg="surfaceMuted" color="textPrimary" minH="100vh">
      <TopNav />
      <AskHankLanding />
      <SiteFooter />
    </Box>
  );
};

export default App;
