import React from "react";
import profilBild from "../assets/images/CV-bild.jpg";

const About: React.FC = () => {
  return (
    <main>
      <section className="hero-section">
        <img
          className="hero-image"
          alt="Om-mig-bild"
          src={profilBild}
        />
        <h2>Om mig</h2>
      </section>

      <div className="content">
        <section className="breadtext">
          <h2>Min bakgrund</h2>
          <div className="text-and-image">
            <div className="text-container">
              <p>
                Mitt namn är Martin och jag studerar till systemutvecklare med
                inriktning på Java. Jag har alltid haft ett stort intresse för
                teknik och programmering, vilket ledde mig till att välja denna
                bana. Just nu går jag första året på programmet <i>Javautvecklare</i> på STI i Liljeholmen, och jag ser fram emot att vara färdigexaminerad år 2026. Jag brinner för att lära mig nya teknologier och tillämpa dem i praktiken, vilket gör att studierna känns både utmanande och inspirerande.
              </p>
              <p>
                Innan jag började på STI har jag haft en del erfarenheter som
                har format min väg till systemutveckling. Jag gick på St Eriks
                gymnasium där jag gick det estetiska programmet med inriktning
                musik. Efter gymnasiet fortsatte jag mina studier genom att läsa
                separata kurser (arkeologi och historia) på Stockholms Universitet.
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
      </div>
    </main>
  );
};

export default About;