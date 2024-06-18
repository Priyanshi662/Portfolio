import {FaGithub, FaLinkedin} from "react-icons/fa"

const images = ["https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png", "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png", "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png", "https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png","https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png", "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_git_icon_130581.png", "https://cdn.icon-icons.com/icons2/2406/PNG/512/github_git_icon_145985.png"]

const imagesURL = [
    "https://html.spec.whatwg.org/multipage/", "https://www.w3.org/Style/CSS/", "https://www.w3schools.com/js/",
    "https://react.dev","https://nodejs.org/es", "https://git-scm.com", "https://github.com"
]

export function Skills() {
    return (
    <section className="knowledge-section" id="knowledge-section">        
    <article className="knowledge-container" id="knowledge-container">
        <h2>Skills</h2>
        <figure>
            {images.map((e,i) => {
                return <a key={i} href={imagesURL[i]} target="blank">
                    <img className="knowledge-images" key={i} src={`${e}`} alt="" />
                </a>
            })}
        </figure>
    </article>
        <h2 >Contact Me! 👩‍💻</h2>
        <h4> Send a mail at : priyanshiw567@gmail.com</h4>
        <a href="https://github.com/Priyanshi662"target="blank" rel="noreferrer" ><FaGithub className="github-icon" style={{borderRadius:"50%"}}></FaGithub></a>
        <a href="https://www.linkedin.com/in/priyanshi-jain-a26077201/" target="blank" rel="noreferrer"><FaLinkedin className="linkedin-icon" ></FaLinkedin></a>
    </section>  
  )
}