import { Typography, Grid } from "@mui/material";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <Grid
      component="section"
      container
      display="flex"
      alignItems="stretch"
      justifyContent="center"
      my={5}
      px={{ sm: 15, lg: 0 }}
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
