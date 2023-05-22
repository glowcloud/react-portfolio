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

const Sidebar = ({ isOpen, setIsSidebarOpen }) => {
  return (
    <Drawer
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
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="#home">
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="#about">
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="#skills">
              <ListItemText primary="Skills" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="#projects">
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="#contact">
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
