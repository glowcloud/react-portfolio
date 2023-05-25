import { useState } from "react";
import { Box, Toolbar } from "@mui/material";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#projects" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <Box width="100%" height="100vh" display="flex" flexDirection="column">
      <Header navItems={navItems} setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar
        navItems={navItems}
        isOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box
        width="100%"
        pt="5rem"
        px={{ xl: "20rem", md: "10rem", sm: "1rem", xs: 2 }}
      >
        <Toolbar />
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
