import { useState } from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Offset = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  padding: "1rem",
}));

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Box width="100%" height="100vh" display="flex" flexDirection="column">
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Box
        width="100%"
        pt="5rem"
        px={{ xl: "25rem", md: "10rem", sm: "1rem", xs: 2 }}
      >
        <Offset />
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
