import {
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  CardMedia,
  CardActionArea,
} from "@mui/material";

const Projects = () => {
  // elden ring, game database, photo gallery,
  // recipes, ecommerce
  return (
    <Grid
      component="section"
      container
      display="flex"
      alignItems="stretch"
      justifyContent="center"
      spacing={2}
      my={5}
      id="projects"
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
          Projects
        </Typography>
      </Grid>

      <Grid item sm={12} md={6}>
        <CardActionArea
          onClick={() => window.open("https://elden-ring-companion.vercel.app")}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            {/* <CardMedia></CardMedia> */}
            <CardContent>
              <Typography variant="h6" textAlign="center">
                Elden Ring Companion
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>

      <Grid item sm={12} md={6}>
        <CardActionArea
          onClick={() => window.open("https://elden-ring-companion.vercel.app")}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            {/* <CardMedia></CardMedia> */}
            <CardContent>
              <Typography variant="h6" textAlign="center">
                Video Game Database
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>

      <Grid item sm={12} md={6}>
        <CardActionArea
          onClick={() => window.open("https://elden-ring-companion.vercel.app")}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            {/* <CardMedia></CardMedia> */}
            <CardContent>
              <Typography variant="h6" textAlign="center">
                Photo Gallery
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>

      <Grid item sm={12} md={6}>
        <CardActionArea
          onClick={() => window.open("https://elden-ring-companion.vercel.app")}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            {/* <CardMedia></CardMedia> */}
            <CardContent>
              <Typography variant="h6" textAlign="center">
                E-commerce Website
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
    </Grid>
  );
};

export default Projects;
