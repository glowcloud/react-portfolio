import { Typography, Grid } from "@mui/material";

import project0Img from "../../../assets/project-0-elden-ring.png";
import project1Img from "../../../assets/project-1-knight-tech.png";
import project2Img from "../../../assets/project-2-photo-portfolio.png";
import project3Img from "../../../assets/project-3-easy-polls.png";
import ProjectCard from "./ProjectCard";

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
      px={{ sm: 15, lg: 0 }}
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
      <ProjectCard
        title="Knight Tech Company Website"
        siteText="An example of a simple website for a company, showcasing
        information about its goals, founders, career possibilities,
        reviews, FAQ and containing an example contact form."
        toolsText="Created with React and Material UI."
        image={project1Img}
        gitLink="https://github.com/glowcloud/company-site"
        webLink="https://company-site-two-alpha.vercel.app"
      />

      {/* PHOTOGRAPHY PORTFOLIO */}
      <ProjectCard
        title="Photography Portfolio"
        siteText="A simple photography portfolio website, containing photo
        galleries, photo viewer, information about the photographer and
        their services, and an example contact form."
        toolsText="Created with React and Material UI."
        image={project2Img}
        gitLink="https://github.com/glowcloud/photo-portfolio"
        webLink="https://photo-portfolio-mu.vercel.app"
      />

      {/* ELDEN RING WEBSITE */}
      <ProjectCard
        title="Elden Ring Companion"
        siteText="A website collecting information about various Elden Ring items,
        bosses, locations, etc. Allows for crafting your own builds, along
        with choosing equipment for it."
        toolsText="Created with React and Material UI. Uses an external API for game info and 
        custom backend with MongoDB for user and builds data."
        image={project0Img}
        gitLink="https://github.com/glowcloud/elden-ring-app"
        webLink="https://elden-ring-companion.vercel.app"
      />

      {/* POLLS WEBSITE */}
      <ProjectCard
        title="Easy Polls"
        siteText="A website for creating and answering polls, and viewing their
        results, with a simple signup and login (non-secure, to showcase
        different functionalities)."
        toolsText="Created with React and Material UI. Uses Firebase for storing data
        and Nivo for showcasing the results of polls as charts."
        image={project3Img}
        gitLink="https://github.com/glowcloud/polls-site"
        webLink="https://easy-polls.vercel.app"
      />
    </Grid>
  );
};

export default Projects;
