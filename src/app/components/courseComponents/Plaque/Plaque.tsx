import React from "react";

const Plaque = () => {
  return (
    <div className="flex-1 p-4 max-w-1/2">
      <div className="p-4">
        <p className="text-inherit">
          Kurssilla perehdytään ohjelmointiin käyttäen. Kurssin käytyäsi voit
          toivottavasti lausahtaa näin:
        </p>
        <p className="text-inherit">
          1. Tietokoneohjelmointi on fiksua ja hauskaa hommaa.
        </p>
        <p className="text-inherit">2. Osaan ohjelmoinnin perusteita.</p>
      </div>

      <p className="text-inherit p-4">
        Tarkoitus olisi, että kurssin lopuksi osaat kirjoittaa pieniä omia
        sovellusohjelmia Osaat myös lukea ja muokata muiden kirjoittamia vähän
        isompiakin ohjelmia. Lisäksi sinulla on sellaiset pohjatiedot
        ohjelmoinnin peruskäsitteistä, että pystyt laajentamaan
        ohjelmointitietojasi ja -taitojasi jatkokurssien tai omatoimisen
        opiskelun avulla.
      </p>
      <p className="text-inherit p-4">
        Työkaluna käytämme Scala-ohjelmointikieltä, mutta opitut asiat ovat
        sovellettavissa muillakin kielillä ohjelmoidessa.
      </p>
      <p className="text-inherit p-4">
        Kurssin arviointi on pyritty suunnittelemaan niin, että kurssiarvosana
        yksi kertoo vähimmäistavoitteiden saavuttamisesta, arvosana kolme vastaa
        jotakuinkin Aallon jatkokursseille riittävää vähimmäisosaamistasoa ja
        arvosana viisi vielä parempaa osaamista.
      </p>
    </div>
  );
};

export default Plaque;
