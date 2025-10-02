import profilBild from "../assets/images/CV-bild.jpg";

export default function About() {
  return (
    <main>
      <section className="hero-section">
        <img
          id="hero-image"
          alt="Om-mig-bild"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa5%2Ffa%2F22%2Fa5fa220cefe27610626fa660a0def0e2.jpg&f=1&nofb=1&ipt=a9553e79f41ce94e5e184320a23324bc8b7bf7667c9043f2383cff0460c3f7c5&ipo=images"
        />
        <h2>Om mig</h2>
      </section>
      <section className="breadtext">
        <h2>Min bakgrund</h2>
        <div className="text-and-image">
          <div className="text-container">
            <p>
                Mitt namn är Martin och jag studerar till systemutvecklare med
                inriktning på Java. Jag har alltid haft ett stort intresse för
                teknik och programmering, vilket ledde mig till att välja denna
                bana. Just nu går jag första året på programmet{" "}
                <i>Javautvecklare</i> på STI i Liljeholmen, och jag ser fram
                emot att vara färdigexaminerad år 2026. Jag brinner för att lära
                mig nya teknologier och tillämpa dem i praktiken, vilket gör att
                studierna känns både utmanande och inspirerande.
              </p>
              <p>
                Innan jag började på STI har jag haft en del erfarenheter som
                har format min väg till systemutveckling. Jag gick på St Eriks
                gymnasium där jag gick det estetiska programmet med inriktning
                musik. Efter gymnasiet fortsatte jag mina studier genom att läsa
                separata kurser (arkeologi och historia) på Stockholms
                Universitet.
              </p>
              <p>
                På fritiden tycker jag om att umgås med vänner, spela datorspel
                och spela gitarr. Intresset för datorspel går också hand i hand
                med mitt intresse att bygga datorer och hårdvara. För mig
                handlar fritiden om att hitta balans mellan att utveckla mig
                själv inom studierna och att njuta av min fritid.
              </p>
              <p>
                Jag ser fram emot den framtid som väntar när jag är
                färdigutbildad och redo att börja arbeta som systemutvecklare.
                Jag ser varje ny kunskap jag lär mig som ett steg närmare att
                kunna bidra till teknikutvecklingen på riktigt.
              </p>
          </div>
          <div className="image-container">
            <img src={profilBild} alt="Profilbild" />
          </div>
        </div>
      </section>
    </main>
  );
}
