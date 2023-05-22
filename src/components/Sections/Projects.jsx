import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link,
  CardActions,
  IconButton,
} from "@mui/material";
import { GitHub, Link as LinkIcon } from "@mui/icons-material";

import project0Img from "../../assets/project-0-elden-ring.png";
import project1Img from "../../assets/project-1-knight-tech.png";
import project2Img from "../../assets/project-2-photo-portfolio.png";
import project3Img from "../../assets/project-3-easy-polls.png";

const Projects = () => {
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

      {/* COMPANY WEBSITE */}
      <Grid item sm={12} md={6} width="100%">
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
            image={project1Img}
            alt="Company Website Project Snapshot Image"
            sx={{
              objectFit: "contain",
              height: "100%",
            }}
          />
          <CardContent
            sx={{
              pb: 1,
            }}
          >
            <Typography gutterBottom variant="h6" textAlign="center">
              Knight Tech Company Website
            </Typography>
            <Typography gutterBottom sx={{ textAlign: "justify" }}>
              An example of a simple website for a company, showcasing
              information about its goals, founders, career possibilities,
              reviews, FAQ and containing an example contact form.
            </Typography>
            <Typography
              gutterBottom
              component="span"
              sx={{ textAlign: "justify" }}
            >
              Created with React and Material UI.
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
                window.open("https://github.com/glowcloud/company-site")
              }
            >
              <GitHub fontSize="inherit" />
            </IconButton>
            <IconButton
              color="primary"
              size="large"
              onClick={() =>
                window.open("https://company-site-two-alpha.vercel.app")
              }
            >
              <LinkIcon fontSize="inherit" />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>

      {/* PHOTOGRAPHY PORTFOLIO */}
      <Grid item sm={12} md={6} width="100%">
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
            image={project2Img}
            alt="Photography Portfolio Project Snapshot Image"
            sx={{
              objectFit: "contain",
              height: "100%",
            }}
          />
          <CardContent
            sx={{
              pb: 1,
            }}
          >
            <Typography gutterBottom variant="h6" textAlign="center">
              Photography Portfolio
            </Typography>
            <Typography gutterBottom sx={{ textAlign: "justify" }}>
              A simple photography portfolio website, containing photo
              galleries, photo viewer, information about the photographer and
              their services, and an example contact form.
            </Typography>
            <Typography
              gutterBottom
              component="span"
              sx={{ textAlign: "justify" }}
            >
              Created with React and Material UI.
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
                window.open("https://github.com/glowcloud/photo-portfolio")
              }
            >
              <GitHub fontSize="inherit" />
            </IconButton>
            <IconButton
              color="primary"
              size="large"
              onClick={() =>
                window.open("https://photo-portfolio-mu.vercel.app")
              }
            >
              <LinkIcon fontSize="inherit" />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>

      {/* ELDEN RING WEBSITE */}
      <Grid item sm={12} md={6} width="100%">
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

      {/* SURVEYS / POLLS */}
      <Grid item sm={12} md={6} width="100%">
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
            image={project3Img}
            alt="Easy Polls Project Snapshot Image"
            sx={{
              objectFit: "contain",
              height: "100%",
            }}
          />
          <CardContent
            sx={{
              pb: 1,
            }}
          >
            <Typography gutterBottom variant="h6" textAlign="center">
              Easy Polls
            </Typography>
            <Typography gutterBottom sx={{ textAlign: "justify" }}>
              A website for creating and answering polls, and viewing their
              results, with a simple signup and login (non-secure, to showcase
              different functionalities).
            </Typography>
            <Typography
              gutterBottom
              component="span"
              sx={{ textAlign: "justify" }}
            >
              Created with React and Material UI. Uses Firebase for storing data
              and Nivo for showcasing the results of polls as charts.
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
                window.open("https://github.com/glowcloud/polls-site")
              }
            >
              <GitHub fontSize="inherit" />
            </IconButton>
            <IconButton
              color="primary"
              size="large"
              onClick={() => window.open("https://easy-polls.vercel.app")}
            >
              <LinkIcon fontSize="inherit" />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Projects;
