import { Typography, Grid, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <Grid
      container
      component={motion.section}
      id="skills"
      px={{ sm: 15, lg: 0 }}
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
          transition: { delayChildren: 0.2, staggerChildren: 0.25 },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: isSmallScreen ? 0.25 : 0.75 }}
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

      <SkillsCard
        title="Frontend"
        skills={["HTML", "CSS", "JavaScript", "React", "MaterialUI"]}
      />

      <SkillsCard
        title="Backend"
        skills={["Node", "Express", "MongoDB", "SQL"]}
      />

      <SkillsCard
        title="Other"
        skills={["Python", "Machine Learning", "Natural Language Processing"]}
      />
    </Grid>
  );
};

export default Skills;
