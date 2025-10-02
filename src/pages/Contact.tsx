export default function Contact() {
  return (
    <main>
      <section className="hero-section">
        <img
          className="hero-image"
          alt="Kontaktbild"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2044727.jpg&f=1&nofb=1&ipt=5ca5c6f4ceb0cb2022c49083fdc55167d9cbbc1113ee2484ecd6875153ac056f&ipo=images"
        />
        <h2>Kontakt</h2>
      </section>

      <section className="breadtext">
        <h2>Kontakta mig</h2>
        <div className="container">
          <article>
            <a href="..." target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin contact-icon"></i>
            </a>
            <h2>LinkedIn</h2>
            <h3>Kolla in min profil</h3>
          </article>
          <article>
            <a
              href="mailto:martineriksson999@gmail.com"
              rel="noopener noreferrer"
            >
              <i className="fa-regular fa-envelope contact-icon"></i>
            </a>
            <h2>Mail</h2>
            <h3>Skicka mig ett mail</h3>
          </article>
          <article>
            <a
              href="https://github.com/Fatseal665"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github contact-icon"></i>
            </a>
            <h2>GitHub</h2>
            <h3>Min kod och projekt</h3>
          </article>
        </div>
      </section>
    </main>
  );
}
