import Jwoc from '../assets/opensource/Jwoc.png';
import GSSOC from '../assets/opensource/GSSOC.png'
export function Opensourceprogs(){
    const programs=[
        {
            name:"JWOC",
            img: Jwoc,
            role:"Project Mentor",
            desc:"Recognized among top 5 mentors"
        },
        {
            name:"GirlScript Summer Of Code",
            img: GSSOC,
            role:"Code contributor",
            desc:"Contributed to more than 3 repos"
        }
    ];
    return (
        <div className="projects-section">
          <h2>Open Source Programs</h2>
          <section id="projects-container">
            {programs.map((program,i) => {
              return <ProgramCards
              key={i}
              name={program.name}
              img={program.img}
              role={program.role}
              desc={program.desc}
            />
            })}
          </section>
        </div>
      );
}
function ProgramCards({name,img,role,desc}){
    return(
        <article className="projects-article">
        <img className="projects-imgs" src={img} alt="" />
        <h2>{name}</h2>
        <h2>{role}</h2>
        <p className="projects-descriptions">{desc}</p>
      </article>
    );
}