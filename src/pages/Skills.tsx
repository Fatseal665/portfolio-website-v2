import React from "react";

const Skills: React.FC = () => {
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
            <h2>
              <strong>Java</strong>
            </h2>
            <h3>
              Jag har goda kunskaper i Java och kan utveckla program och
              applikationer med effektiv och strukturerad kod. Jag är bekväm med
              objektorienterad programmering och använder Java för att lösa
              olika tekniska problem och skapa användarvänliga lösningar.
            </h3>
          </article>

          <article>
            <i className="fa-solid fa-database icon"></i>
            <h2>
              <strong>Databashantering</strong>
            </h2>
            <h3>
              Jag har erfarenhet av databashantering och har arbetat med HSQLDB
              för att skapa och hantera databaser. Jag är bekant med att använda
              util-klasser och DAO-klasser för att effektivt interagera med
              databasen och utföra CRUD-operationer.
            </h3>
          </article>

          <article>
            <i className="fa-solid fa-laptop icon"></i>
            <h2>
              <strong>Webbdesign</strong>
            </h2>
            <h3>
              Jag har bra kunskaper inom HTML och okej kunskaper inom CSS. Jag har ett öga för 
              design och tycker det är kul att komma på designs till websidor.
            </h3>
          </article>

          <article>
            <i className="fa-brands fa-react icon"></i>
            <h2>
              <strong>React</strong>
            </h2>
            <h3>
              React är det bibliotek jag har arbetat mest med när det kommer till webbutveckling. 
              Jämfört med andra ramverk så är det React jag är bekvämast med. React Router är något jag 
              också har erfarenhet av. Ett exempel av de webbapplikationer jag byggt i React är den här 
              webbsidan du är inne på just nu.
            </h3>
          </article>

          <article>
            <i className="fa-brands fa-github contact-icon"></i>            
            <h2>
              <strong>Github</strong>
            </h2>
            <h3>
              Github är något som jag har jobbat med frekvent under utbildningen. Jag har erfarenhet utav 
              versionshantering och branches för att nämna några egenskaper.
            </h3>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Skills;