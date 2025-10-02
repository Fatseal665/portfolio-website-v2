export default function Skills() {
  return (
    <main>
      <section className="hero-section">
        <img
          className="hero-image"
          alt="Huvudbild"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Ffile%2F2440x1440-programming-background-2440-x-1440-tafu77wspp7j3is4.jpg&f=1&nofb=1&ipt=5febde748787c0f0eb5309e397e2ac6bd7c55faaf1a5296dcb7e3b6641297416&ipo=images"
        />
        <h2>Kunskaper</h2>
      </section>

      <section className="breadtext">
        <h2>Teknik jag behärskar</h2>
        <div className="container">
          <article>
            <i className="fa-brands fa-java icon"></i>
            <h2>Java</h2>
            <h3>Jag har goda kunskaper i Java...</h3>
          </article>
          <article>
            <i className="fa-solid fa-database icon"></i>
            <h2>Databashantering</h2>
            <h3>Jag har erfarenhet av databashantering...</h3>
          </article>
          <article>
            <i className="fa-solid fa-laptop icon"></i>
            <h2>Webbdesign</h2>
            <h3>Jag har bra kunskaper inom HTML och CSS...</h3>
          </article>
          <article>
            <i className="fa-brands fa-react icon"></i>
            <h2>React</h2>
            <h3>React är det bibliotek jag jobbat mest med...</h3>
          </article>
          <article>
            <i className="fa-brands fa-github contact-icon"></i>
            <h2>Github</h2>
            <h3>Github är något jag har jobbat med frekvent...</h3>
          </article>
        </div>
      </section>
    </main>
  );
}
