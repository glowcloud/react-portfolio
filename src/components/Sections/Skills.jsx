import {
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
} from "@mui/material";

const Skills = () => {
  return (
    <Grid
      component="section"
      container
      display="flex"
      alignItems="stretch"
      justifyContent="center"
      my={5}
      spacing={2}
      id="skills"
      sx={{
        scrollMarginTop: 90,
      }}
    >
      <Grid item xs={12}>
        <Typography
          gutterBottom
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "500" }}
        >
          Skills
        </Typography>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            "&:hover": {
              backgroundColor: "#647dee",
              WebkitTransition: "background-color 0.3s linear",
            },
          }}
        >
          <CardContent>
            <Typography variant="h6" textAlign="center">
              Frontend
            </Typography>
            <List>
              <ListItem>
                <Typography>HTML</Typography>
              </ListItem>
              <ListItem>
                <Typography>CSS</Typography>
              </ListItem>
              <ListItem>
                <Typography>JavaScript</Typography>
              </ListItem>
              <ListItem>
                <Typography>React</Typography>
              </ListItem>
              <ListItem>
                <Typography>MaterialUI</Typography>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            "&:hover": {
              backgroundColor: "#647dee",
              WebkitTransition: "background-color 0.3s linear",
            },
          }}
        >
          <CardContent>
            <Typography variant="h6" textAlign="center">
              Backend
            </Typography>
            <List>
              <ListItem>
                <Typography>Node</Typography>
              </ListItem>
              <ListItem>
                <Typography>Express</Typography>
              </ListItem>
              <ListItem>
                <Typography>MongoDB</Typography>
              </ListItem>
              <ListItem>
                <Typography>SQL</Typography>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            "&:hover": {
              backgroundColor: "#647dee",
              WebkitTransition: "background-color 0.3s linear",
            },
          }}
        >
          <CardContent>
            <Typography variant="h6" textAlign="center">
              Other
            </Typography>
            <List>
              <ListItem>
                <Typography>Python</Typography>
              </ListItem>
              <ListItem>
                <Typography>Machine Learning</Typography>
              </ListItem>
              <ListItem>
                <Typography>Natural Language Processing</Typography>
              </ListItem>
              <ListItem>
                <Typography>Flutter</Typography>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Skills;
