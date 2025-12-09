import React from 'react';

export const Impressum: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
        <h1>Impressum</h1>
        <p>Angaben gemäß § 5 TMG</p>

        <h3>Betreiber der Website</h3>
        <p>
          <strong>Energietechnik Stellenangebote GmbH</strong><br />
          Musterstraße 123<br />
          10115 Berlin<br />
          Deutschland
        </p>

        <h3>Kontakt</h3>
        <p>
          Telefon: +49 (0) 30 12345678<br />
          E-Mail: kontakt@energietechnik-stellenangebote.de
        </p>

        <h3>Registereintrag</h3>
        <p>
          Eintragung im Handelsregister.<br />
          Registergericht: Amtsgericht Berlin-Charlottenburg<br />
          Registernummer: HRB 123456
        </p>

        <h3>Umsatzsteuer-ID</h3>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
          DE 123456789
        </p>

        <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
        <p>
          Max Mustermann<br />
          Musterstraße 123<br />
          10115 Berlin
        </p>

        <hr className="my-8" />

        <h3>Haftungsausschluss (Disclaimer)</h3>
        <p>
          <strong>Haftung für Inhalte</strong><br />
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
      </div>
    </div>
  );
};