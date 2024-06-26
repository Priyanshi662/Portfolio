import {FaGithub, FaLinkedin} from "react-icons/fa"

export function ContactMe()
{
    return( 
        <div className="contact-container">
            <h2 style={{marginBottom : '20px'}} >Contact Me! 👩‍💻</h2>
            <a href="https://github.com/Priyanshi662"target="blank" rel="noreferrer" ><FaGithub className="github-icon" style={{borderRadius:"50%"}}></FaGithub></a>
            <a href="https://www.linkedin.com/in/priyanshi-jain-a26077201/" target="blank" rel="noreferrer"><FaLinkedin className="linkedin-icon" ></FaLinkedin></a>
        
            <h4> Send a mail at : priyanshiw567@gmail.com</h4>
            </div>
    )
}