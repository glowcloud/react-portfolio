import { useState } from "react";
import { Box, Toolbar } from "@mui/material";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

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
        <Toolbar />
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
