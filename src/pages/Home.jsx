import Landing from "../components/Sections/Landing";
import AboutMe from "../components/Sections/AboutMe";
import Skills from "../components/Sections/Skills";
import Projects from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";
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
