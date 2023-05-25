import Landing from "../components/Sections/Landing";
import AboutMe from "../components/Sections/AboutMe";
import Skills from "../components/Sections/Skills/Skills";
import Projects from "../components/Sections/Projects/Projects";
import Contact from "../components/Sections/Contact/Contact";
import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Landing />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
