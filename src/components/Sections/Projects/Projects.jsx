import { Typography, Grid, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

import project0Img from "../../../assets/project-0-elden-ring.png";
import project1Img from "../../../assets/project-1-knight-tech.png";
import project2Img from "../../../assets/project-2-photo-portfolio.png";
import project3Img from "../../../assets/project-3-easy-polls.png";
import project4Img from "../../../assets/project-4-flashcards.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <Grid
      container
      component={motion.section}
      id="projects"
      px={{ sm: 15, lg: 0 }}
      my={20}
      sx={{
        scrollMarginTop: 90,
      }}
      display="flex"
      alignItems="stretch"
      justifyContent="center"
      spacing={2}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delayChildren: 0.2, staggerChildren: 0.35 },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: isSmallScreen ? 0.1 : 0.15 }}
    >
      <Grid
        item
        xs={12}
        component={motion.div}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
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
        reviews, FAQ, and containing an example contact form."
        toolsText="Created with React, React Router, MUI and Framer Motion."
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
        toolsText="Built with React, React Router and MUI."
        image={project2Img}
        gitLink="https://github.com/glowcloud/photo-portfolio"
        webLink="https://photo-portfolio-mu.vercel.app"
      />

      {/* NEXTJS FLASHCARDS */}
      <ProjectCard
        title="Flashcards"
        siteText="A website for creating decks of flashcards for your learning needs. 
        Learn by reviewing or matching your cards."
        toolsText="Created with Next.js and styled with CSS modules. 
        React SimpleMDE Markdown Editor used for card content input
        with remark for converting it into HTML for display. 
        Uses Firebase for data storage with Google Authentication for user access."
        image={project4Img}
        gitLink="https://github.com/glowcloud/nextjs-flashcards"
        webLink="https://easy-flashcards.vercel.app"
      />

      {/* ELDEN RING WEBSITE */}
      <ProjectCard
        title="Elden Ring Companion"
        siteText="A website collecting information about various Elden Ring items,
        bosses, locations, etc. Allows for crafting your own builds, along
        with choosing equipment for it."
        toolsText="Created with React, React Router and MUI. Uses an external API for game info and 
        a custom backend, built with Express.js and MongoDB, for user and builds data."
        image={project0Img}
        gitLink="https://github.com/glowcloud/elden-ring-app"
        webLink="https://elden-ring-companion.vercel.app"
      />

      {/* POLLS WEBSITE */}
      <ProjectCard
        title="Easy Polls"
        siteText="A website for creating and answering polls, and viewing their
        results, with a simple signup and login (non-secure, made to showcase
        different functionalities)."
        toolsText="Built with React, React Router and MUI. Uses Firebase for storing data
        and Nivo for showcasing the results of polls as pie charts."
        image={project3Img}
        gitLink="https://github.com/glowcloud/polls-site"
        webLink="https://easy-polls.vercel.app"
      />
    </Grid>
  );
};

export default Projects;
