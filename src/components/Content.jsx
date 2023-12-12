import my_photo from '../assets/profile.jpg';
export function Content() {
    return (
      <>
        <section className="body-container" id="body-container">
          <figure className="about-me-photo">
            <img
              src={my_photo}
              alt="My photo"
            />
          </figure>
          <article className="aboutMe-text">
            <h2 id="about-me-h2">About me 👩‍💻</h2>
            <p>
            I am a full stack developer in constant growth, I am from India 🌏 and 
            I am currently studying computer engineering, 
            I am always researching and learning new things!
            </p>
          </article>
  
        </section>
      </>
    );
  }