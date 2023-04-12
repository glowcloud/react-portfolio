import {
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  CardMedia,
  CardActionArea,
  Link,
  CardActions,
  IconButton,
  SvgIcon,
  Box,
} from "@mui/material";
import { GitHub, Link as LinkIcon } from "@mui/icons-material";

import project0Img from "../../assets/project-0-elden-ring.png";

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

      <Grid item sm={12} md={6} width="100%">
        {/* <CardActionArea
          onClick={() => window.open("https://elden-ring-companion.vercel.app")}
        > */}
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <CardMedia
            component="img"
            image={project0Img}
            alt="Elden Ring Project Snapshot Image"
            sx={{
              objectFit: "contain",
            }}
          />
          <CardContent
            sx={{
              pb: 1,
            }}
          >
            <Typography gutterBottom variant="h6" textAlign="center">
              Elden Ring Companion
            </Typography>
            <Typography gutterBottom sx={{ textAlign: "justify" }}>
              A website collecting information about various Elden Ring items,
              bosses, locations, etc. Allows for crafting your own builds, along
              with choosing equipment for it.
            </Typography>
            <Typography
              gutterBottom
              component="span"
              sx={{ textAlign: "justify" }}
            >
              Created with React and Material UI. Uses external {""}
            </Typography>
            <Typography
              gutterBottom
              component={Link}
              underline="hover"
              sx={{
                cursor: "pointer",
                textAlign: "justify",
                "&:hover": {
                  color: "#7f53ac",
                  backgroundImage:
                    "linear-gradient(315deg, #7f53ac 0%, #647dee 74%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
              }}
              onClick={() =>
                window.open("https://docs.eldenring.fanapis.com/docs/")
              }
            >
              Elden Ring API
            </Typography>
            <Typography component="span" sx={{ textAlign: "justify" }}>
              {" "}
              and custom backend with MongoDB for user and builds data.
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: 0,
            }}
          >
            <IconButton
              color="primary"
              size="large"
              onClick={() =>
                window.open("https://github.com/glowcloud/elden-ring-app")
              }
            >
              <GitHub fontSize="inherit" />
            </IconButton>
            <IconButton
              color="primary"
              size="large"
              onClick={() =>
                window.open("https://elden-ring-companion.vercel.app")
              }
            >
              <LinkIcon fontSize="inherit" />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>

      <Grid item sm={12} md={6} width="100%">
        <CardActionArea
          onClick={() => window.open("https://elden-ring-companion.vercel.app")}
        >
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
            {/* <CardMedia></CardMedia> */}
            <CardContent>
              <Typography variant="h6" textAlign="center">
                Video Game Database
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>

      <Grid item sm={12} md={6} width="100%">
        <CardActionArea
          onClick={() => window.open("https://elden-ring-companion.vercel.app")}
        >
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
            {/* <CardMedia></CardMedia> */}
            <CardContent>
              <Typography variant="h6" textAlign="center">
                Photo Gallery
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>

      <Grid item sm={12} md={6} width="100%">
        <CardActionArea
          onClick={() => window.open("https://elden-ring-companion.vercel.app")}
        >
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
