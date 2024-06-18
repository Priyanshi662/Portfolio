import my_photo from '../assets/profile.jpg';
import Type from './Type';

export function Content() {
    return (
      <>
        <section className="body-container" id="body-container">
        <div className="my-name">
        <div className='greeting'>
        <p>
          Hello World 
          <span className="greetings">👋🏼</span>
        </p>
        </div>
        <h1>I'm, Priyanshi Jain</h1>
        {/* <p className='desc'>
          Passionate about creating interactive and engaging experiences for users.
        </p> */}
        
          <article className="aboutMe-text" id="about-me-h2">
            <Type/>
            {/* <p>
            I am a full stack developer in constant growth, I am from India 🌏 and 
            I am currently studying computer engineering, 
            I am always researching and learning new things!
            </p> */}
          </article>
          </div>
          <figure className="about-me-photo">
            <img
              src={my_photo}
              alt="My photo"
            />
          </figure>
        </section>
      </>
    );
  }