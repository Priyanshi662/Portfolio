import propTypes from "prop-types";
import deployed from "../assets/Projects/deployed.png"
import funfusion from "../assets/Projects/funfusion.png"

export function Projects() {
  const projects = [
    {
      title: "WanderStay",
      img: deployed,
      page: "https://wander-stay.netlify.app/",
      repo: "https://github.com/Priyanshi662/WanderStay",
      description: "A hospitality exchange service with a seamless user experience, buy and rent rooms all across the globe",
    },
    {
      title:"Melody mix",
      // img:,
      // page: "",
      repo:"https://github.com/Priyanshi662/MelodyMix",
      description:"A music app where users can listen to music, save music to their accounts and also create awesome playlists."
    },
    {
      title: "Fun fusion",
      img: funfusion,
      page: "https://fun-fusion.onrender.com/",
      repo: "https://github.com/Priyanshi662/FunFusion",
      description: "Different applications made for entertainment purposes",
    },
  ];

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <section id="projects-container">
        
        {projects.map((project,i) => {
          return <ProjectsCards
          key={i}
          title={project.title}
          img={project.img}
          page={project.page}
          repo={project.repo}
          description={project.description}
        />
        
        })}

      </section>
    </div>
  );
}

function ProjectsCards({ title, img, repo, page, description }) {
  return (
    <article className="projects-article">
      <img className="projects-imgs" src={img} alt="" />
      <h2>{title}</h2>

      <p className="projects-descriptions">{description}</p>

      <div className="inputs-repository-container">
        <input
          type="button"
          value="Repo link"
          onClick={() => window.open(repo, "_blank")}
        />
        <input
          type="button"
          value="Deployed link"
          onClick={() => window.open(page, "_blank")}
        />
      </div>
    </article>
  );
}

ProjectsCards.propTypes = {
  title: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  repo: propTypes.string.isRequired,
  page: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};