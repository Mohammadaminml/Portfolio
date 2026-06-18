import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CounterStats from "./components/CounterStats";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import GithubActivity from "./components/GithubActivity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Publications from "./components/Publications";
import TechStack from "./components/TechStack";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CounterStats />
      <Education />
      <Publications />
      <Certificates />
      <TechStack />
      <GithubActivity />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;