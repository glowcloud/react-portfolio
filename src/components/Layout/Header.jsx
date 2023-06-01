import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Link,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { motion } from "framer-motion";

const Header = ({ navItems, setIsSidebarOpen }) => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#323d49", top: -1 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, visibility: { xs: "visible", md: "hidden" } }}
          onClick={() => {
            setIsSidebarOpen(true);
          }}
        >
          <Menu />
        </IconButton>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          sx={{ mr: 2, visibility: { xs: "hidden", md: "visible" } }}
        >
          {navItems.map((item) => (
            <Box
              key={item.text}
              component={motion.div}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              mx={2}
            >
              <Typography
                variant="h6"
                component={Link}
                href={item.href}
                underline="hover"
                sx={{
                  color: "text.primary",
                  "&:hover": {
                    color: "#7f53ac",
                    backgroundImage:
                      "linear-gradient(315deg, #7f53ac 0%, #647dee 74%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  },
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
