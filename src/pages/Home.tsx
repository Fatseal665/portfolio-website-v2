import React from "react";

const Home: React.FC = () => {
  return (
    <main>
      <section className="hero-section">
        <img
          className="hero-image"
          alt="Huvudbild"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa5%2Ffa%2F22%2Fa5fa220cefe27610626fa660a0def0e2.jpg&f=1&nofb=1&ipt=a9553e79f41ce94e5e184320a23324bc8b7bf7667c9043f2383cff0460c3f7c5&ipo=images"
        />
        <h2>Välkommen</h2>
      </section>

      <section className="breadtext">
        <h2>Välkommen till min hemsida!</h2>
        <p>
          Jag heter Martin och är en blivande systemutvecklare. Denna sida är
          din plats för att lära känna mig bättre och läsa om vad jag har att
          erbjuda inom systemutveckling. Här hittar du information om mig, mina
          tekniska färdigheter, samt hur du kan komma i kontakt med mig.
        </p>
        <p>
          Oavsett om du är här för att läsa mer om min bakgrund, ta del av mina
          projekt eller bara vill ta en titt på vad jag gör, hoppas jag att du
          hittar det du söker. Tveka inte att höra av dig om du har några frågor
          eller vill diskutera framtida samarbeten.
        </p>
        <p>Tack för att du besöker min hemsida!</p>
        <p>
          Vänliga hälsningar, <br />
          Martin Eriksson
        </p>
      </section>
    </main>
  );
};

export default Home;