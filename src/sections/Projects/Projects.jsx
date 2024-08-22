import styles from './ProjectsStyles.module.css';
import VLC from '../../assets/VLC.png';
import memes from '../../assets/memes.png';
import farm from '../../assets/farm.png';
import DadJokes from '../../assets/DadJokes.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={VLC}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Media Controller"
          p="hand Gestures Controller"
        />
        <ProjectCard
          src={memes}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="MemeAlert"
          p="Wake me up with Memes"
        />
        <ProjectCard
          src={farm}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Farm Track"
          p="Agriculture Tracker"
        />
        <ProjectCard
          src={DadJokes}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Dad Jokes"
          p="A funny Chrome Extension"
        />
      </div>
    </section>
  );
}

export default Projects;
