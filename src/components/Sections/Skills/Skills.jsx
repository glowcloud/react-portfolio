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
      viewport={{ once: true, amount: isSmallScreen ? 0.25 : 0.7 }}
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
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "500" }}
        >
          Skills
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        component={motion.div}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Typography gutterBottom fontSize={20} px={5} pb={3} textAlign="center">
          I am experienced in the listed frontend technologies and know basics
          of backend development. During my studies I implemented multiple
          Machine Learning projects using Python, including my Master's thesis.
        </Typography>
      </Grid>

      <SkillsCard
        title="Frontend"
        skills={["HTML", "CSS", "JavaScript", "React", "Next.js", "MUI"]}
      />

      <SkillsCard
        title="Backend"
        skills={["Node.js", "Express.js", "MongoDB", "Firebase", "SQL"]}
      />

      <SkillsCard
        title="Other"
        skills={["Python", "Machine Learning", "Natural Language Processing"]}
      />
    </Grid>
  );
};

export default Skills;
