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

const Sidebar = ({ navItems, isOpen, setIsSidebarOpen }) => {
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
          {navItems.map((item) => (
            <ListItem key={item.text} disablePadding>
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
