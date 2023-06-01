import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Link,
  Toolbar,
} from "@mui/material";
import { motion } from "framer-motion";

const Sidebar = ({ navItems, isOpen, setIsSidebarOpen }) => {
  return (
    <Drawer
      component={motion.nav}
      anchor="left"
      open={isOpen}
      onClose={() => setIsSidebarOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: "200px",
        },
      }}
    >
      <Toolbar />
      <Box w={250} onClick={() => setIsSidebarOpen(false)}>
        <List
          component={motion.ul}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: {
              transition: { staggerChildren: 0.05, delayChildren: 0.2 },
            },
            closed: {
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {navItems.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              component={motion.li}
              variants={{
                open: {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    y: { stiffness: 1000, velocity: -100 },
                  },
                },
                closed: {
                  y: 50,
                  opacity: 0,
                  scale: 0.8,
                },
              }}
            >
              <ListItemButton component={Link} href={item.href}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
