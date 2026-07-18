"use client";

import { FormEvent, useState } from "react";

const IMG = {
  hero: "https://static.tildacdn.one/tild3564-6632-4233-b537-643562376632/03_Riverside_horizon.jpg",
  bedroom: "https://static.tildacdn.one/tild3265-3036-4731-a536-303865323665/15_Bedroom_closeup_s.jpg",
  ocean: "https://static.tildacdn.one/tild3266-6134-4136-a537-623239333736/10_Ocean_View.jpg",
  beach: "https://static.tildacdn.one/tild3837-6232-4330-a337-326663353334/05_Beach_horizontal.jpg",
  terrace: "https://static.tildacdn.one/tild3637-3037-4536-b835-343835653738/09_Terrace_horizonta.jpg",
  room: "https://static.tildacdn.one/tild6264-3638-4738-a261-616438653364/11_Bedroom.jpg",
  lifestyle: "https://optim.tildacdn.one/tild6365-3138-4533-a135-323566393738/-/format/webp/2026-06-17_121626.jpg.webp",
  nuanu: "https://optim.tildacdn.one/tild6533-6538-4735-b964-656535613034/-/resize/800x1000/-/format/webp/2026-06-17_121936.jpg.webp",
  art: "https://optim.tildacdn.one/tild6631-3736-4430-b936-353166313438/-/resize/600x600/-/format/webp/2026-06-17_121939.jpg.webp",
};

const residences = [
  { n: "01", title: "Studio", area: "35–39 m²", terrace: "Terrasse 11–14 m²", desc: "Une retraite lumineuse avec kitchenette, salon et vue océan ou rivière." },
  { n: "02", title: "Suite 1 chambre", area: "55–61 m²", terrace: "Terrasse 15–50 m²", desc: "Une vraie résidence avec chambre, séjour, salle à manger et cuisine complète." },
  { n: "03", title: "Family Suite 2 chambres", area: "≈ 94 m²", terrace: "Terrasse ≈ 25 m²", desc: "Pensée pour les familles : suite master, seconde chambre et généreux espaces de vie." },
  { n: "04", title: "Signature 3 chambres", area: "Sur demande", terrace: "Vues panoramiques", desc: "Volumes rares, intimité et grandes terrasses ouvertes sur la canopée et l’océan." },
  { n: "05", title: "Penthouse", area: "Collection signature", terrace: "Dernier étage", desc: "La pièce maîtresse de Luna : horizon dégagé et expérience résidentielle totale." },
];

const faqs = [
  ["Où se situe Luna Residences ?", "À Nuanu Creative City, sur la côte sud-ouest de Bali, à environ 300 mètres de Pantai Nyanyi Beach, entre rivière, jungle et océan."],
  ["Quel est le modèle de propriété ?", "Un leasehold longue durée de 60 ans et plus. Les conditions exactes et options d’extension sont confirmées dans le dossier juridique de chaque unité."],
  ["Quel est le plan de paiement ?", "25 % à la signature, 25 % au premier trimestre 2027, 25 % au premier trimestre 2028 et 25 % à la remise des clés."],
  ["Le rendement de 10–14 % est-il garanti ?", "Non. Il s’agit d’une projection marketing basée sur des hypothèses d’occupation et de revenus. Les performances réelles dépendent du marché, des coûts et de l’unité choisie."],
  ["Puis-je y vivre et louer le reste du temps ?", "Oui. Luna est conçu pour la résidence principale, l’usage hybride ou un investissement locatif passif avec gestion hôtelière 5 étoiles 24/7."],
  ["Comment recevoir les prix et plans disponibles ?", "Complétez le formulaire ou contactez-nous sur WhatsApp. Vous recevrez la brochure, les plans, la liste de prix et les disponibilités actualisées."],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [menu, setMenu] = useState(false);

  function submitLead(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = `Bonjour, je souhaite recevoir le dossier Luna Residences.\nNom : ${data.get("name")}\nTéléphone : ${data.get("phone")}\nBudget : ${data.get("budget")}\nProjet : ${data.get("goal")}`;
    window.open(`https://wa.me/6285945360055?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Luna Residences — accueil"><span className="brand-mark">L</span><span>LUNA<br/><small>RESIDENCES</small></span></a>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          <a href="#vision" onClick={() => setMenu(false)}>Le projet</a>
          <a href="#residences" onClick={() => setMenu(false)}>Résidences</a>
          <a href="#investment" onClick={() => setMenu(false)}>Investir</a>
          <a href="#location" onClick={() => setMenu(false)}>Nuanu</a>
        </nav>
        <a className="nav-cta" href="#contact">Recevoir la brochure <span>↗</span></a>
        <button className="menu" onClick={() => setMenu(!menu)} aria-label="Ouvrir le menu">{menu ? "×" : "☰"}</button>
      </header>

      <section id="top" className="hero" style={{backgroundImage:`url(${IMG.hero})`}}>
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow light"><span /> NUANU CREATIVE CITY · BALI</p>
          <h1>Là où la rivière<br/>rencontre <em>l’océan.</em></h1>
          <p className="hero-intro">15 résidences iconiques signées YODEZEEN. Une collection rare entre jungle tropicale, culture et horizon.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#contact">Accès prioritaire <span>↗</span></a>
            <a className="text-link" href="#vision">Découvrir Luna <span>↓</span></a>
          </div>
        </div>
        <div className="hero-stats">
          <div><strong>À partir de</strong><b>185 000 $</b></div>
          <div><strong>Collection</strong><b>15 résidences</b></div>
          <div><strong>Livraison</strong><b>T4 2028</b></div>
        </div>
        <div className="scroll-note">SCROLL TO EXPLORE <i /></div>
      </section>

      <section className="manifesto" id="vision">
        <div>
          <p className="eyebrow"><span /> LA VISION</p>
          <h2>Plus qu’une adresse.<br/>Une nouvelle façon<br/><em>d’habiter Bali.</em></h2>
        </div>
        <div className="manifesto-copy">
          <p className="lead">Luna Residences réunit architecture, hospitalité et nature dans l’écosystème vivant de Nuanu.</p>
          <p>Chaque résidence s’ouvre sur l’océan, la rivière ou la jungle. Les lignes fluides de YODEZEEN prolongent le paysage tandis qu’une gestion hôtelière 5 étoiles prend soin de chaque détail, 24h/24.</p>
          <div className="signature">YODEZEEN <small>ARCHITECTURE & INTERIORS</small></div>
        </div>
      </section>

      <section className="image-break" style={{backgroundImage:`url(${IMG.terrace})`}}><div className="image-caption"><b>01</b><span>Terrasses privées<br/>Vues sans interruption</span></div></section>

      <section className="numbers">
        <p className="eyebrow light"><span /> L’ESSENTIEL</p>
        <div className="number-grid">
          <article><b>10–14<sup>%</sup></b><p>Rendement annuel projeté*</p></article>
          <article><b>60<sup>+ ans</sup></b><p>Leasehold longue durée</p></article>
          <article><b>25<sup>%</sup></b><p>Premier apport</p></article>
          <article><b>300<sup>m</sup></b><p>De la plage de Nyanyi</p></article>
        </div>
        <small>*Projection indicative, non garantie. Selon occupation, charges, conditions de marché et unité choisie.</small>
      </section>

      <section className="residences" id="residences">
        <div className="section-head"><div><p className="eyebrow"><span /> LA COLLECTION</p><h2>Cinq façons de vivre<br/><em>au rythme de Luna.</em></h2></div><p>Du studio intime au penthouse signature, chaque typologie privilégie les vues, les terrasses et la lumière.</p></div>
        <div className="residence-layout">
          <div className="residence-list">
            {residences.map((r) => <article key={r.n}><span>{r.n}</span><div><h3>{r.title}</h3><p>{r.desc}</p><div className="tags"><b>{r.area}</b><b>{r.terrace}</b></div></div><a href="#contact" aria-label={`Recevoir le plan ${r.title}`}>↗</a></article>)}
          </div>
          <div className="sticky-image" style={{backgroundImage:`url(${IMG.bedroom})`}}><span>INTÉRIEURS PAR YODEZEEN</span></div>
        </div>
      </section>

      <section className="lifestyle">
        <div className="lifestyle-grid">
          <img src={IMG.beach} alt="Littoral de Nyanyi à proximité de Luna Residences" />
          <div><p className="eyebrow light"><span /> LE PRIVILÈGE LUNA</p><h2>Le beach club devient<br/><em>votre quotidien.</em></h2><p>L’hospitalité et l’énergie créative de Luna Beach Club se prolongent jusque chez vous.</p></div>
          <img src={IMG.lifestyle} alt="Lifestyle à Luna Beach Club" />
        </div>
        <div className="perks">
          {[["01","Luna Black Card","Accès VIP à vie, réservations prioritaires et tarifs préférentiels."],["02","In-residence dining","La signature culinaire de Luna servie directement chez vous."],["03","Daily shuttle","Transport dédié entre votre résidence, le beach club et Nuanu."],["04","Resident programming","Événements privés, rencontres et accès prioritaire au calendrier Luna."]].map(p=><article key={p[0]}><span>{p[0]}</span><h3>{p[1]}</h3><p>{p[2]}</p></article>)}
        </div>
      </section>

      <section className="nuanu" id="location">
        <div className="nuanu-copy"><p className="eyebrow"><span /> NUANU CREATIVE CITY</p><h2>44 hectares.<br/>Un monde en soi.</h2><p>Art, gastronomie, éducation, bien-être et nature : Nuanu est une destination côtière vivante toute l’année, pensée pour créer, apprendre et se reconnecter.</p><a className="text-link dark" href="#contact">Recevoir le guide de Nuanu <span>↗</span></a></div>
        <div className="nuanu-collage"><img className="nuanu-tall" src={IMG.nuanu} alt="Nature et architecture à Nuanu Creative City"/><img className="nuanu-small" src={IMG.art} alt="Art et culture à Nuanu Creative City"/><div className="nuanu-badge"><b>1M+</b><span>visiteurs annuels</span></div></div>
        <div className="ecosystem"><div><b>12 ha</b><span>de parcs</span></div><div><b>365</b><span>jours d’activité</span></div><div><b>30+</b><span>lieux & projets</span></div><div><b>70%</b><span>d’espaces naturels</span></div></div>
      </section>

      <section className="investment" id="investment">
        <div className="invest-image" style={{backgroundImage:`url(${IMG.ocean})`}}><div><span>DESIGN ICONIQUE</span><b>VALEUR<br/>DURABLE</b></div></div>
        <div className="invest-copy"><p className="eyebrow light"><span /> L’INVESTISSEMENT</p><h2>Un actif rare.<br/><em>Géré sans effort.</em></h2><p>Une collection très limitée, une destination en pleine croissance et une gestion hôtelière complète : Luna réunit usage personnel et potentiel locatif.</p><ul><li><span>01</span>Gestion 5 étoiles 24/7</li><li><span>02</span>Location entièrement opérée</li><li><span>03</span>Handover T4 2028</li><li><span>04</span>Vues océan, rivière & jungle</li></ul><a className="btn sand" href="#contact">Recevoir l’étude financière <span>↗</span></a></div>
      </section>

      <section className="payment"><div><p className="eyebrow"><span /> PLAN DE PAIEMENT</p><h2>Avancez<br/><em>à votre rythme.</em></h2></div><div className="timeline">{[["25%","À la signature"],["25%","T1 2027"],["25%","T1 2028"],["25%","À la livraison"]].map((x,i)=><article key={x[1]}><span>{String(i+1).padStart(2,"0")}</span><b>{x[0]}</b><p>{x[1]}</p></article>)}</div></section>

      <section className="faq"><div><p className="eyebrow"><span /> QUESTIONS FRÉQUENTES</p><h2>Tout ce qu’il faut<br/><em>savoir.</em></h2></div><div className="faq-list">{faqs.map((f,i)=><article className={openFaq===i ? "active" : ""} key={f[0]}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)}><span>{String(i+1).padStart(2,"0")}</span>{f[0]}<b>{openFaq===i?"−":"+"}</b></button><p>{f[1]}</p></article>)}</div></section>

      <section className="contact" id="contact">
        <div className="contact-copy"><p className="eyebrow light"><span /> ACCÈS PRIORITAIRE</p><h2>Les meilleures vues<br/>partent <em>en premier.</em></h2><p>Recevez la brochure, les plans, la liste de prix et les disponibilités actualisées.</p><div className="contact-note"><span>✓</span><p>Réponse personnalisée sous 24 h<br/><small>Aucun spam. Vos informations restent confidentielles.</small></p></div></div>
        <form onSubmit={submitLead}><label>Votre nom<input required name="name" placeholder="Prénom et nom"/></label><label>WhatsApp / Téléphone<input required name="phone" type="tel" placeholder="+33 6 00 00 00 00"/></label><div className="form-row"><label>Budget<select name="budget" defaultValue=""><option value="" disabled>Sélectionner</option><option>185k–300k $</option><option>300k–500k $</option><option>500k $ et plus</option></select></label><label>Votre projet<select name="goal" defaultValue=""><option value="" disabled>Sélectionner</option><option>Investissement locatif</option><option>Résidence à Bali</option><option>Usage hybride</option></select></label></div><label className="consent"><input type="checkbox" required/> J’accepte d’être contacté à propos de Luna Residences.</label><button className="btn primary submit" type="submit">Recevoir le dossier complet <span>↗</span></button><p className="or">ou écrire directement sur <a href="https://wa.me/6285945360055" target="_blank" rel="noreferrer">WhatsApp ↗</a></p></form>
      </section>

      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">L</span><span>LUNA<br/><small>RESIDENCES</small></span></a><div><p>NUANU CREATIVE CITY<br/>BERABAN · TABANAN · BALI</p></div><div><a href="mailto:partners@nuanu.realestate">partners@nuanu.realestate</a><a href="tel:+6285945360055">+62 859 4536 0055</a></div><div><a href="#vision">Projet</a><a href="#residences">Résidences</a><a href="#investment">Investir</a></div><small>© 2026 LUNA RESIDENCES · INFORMATIONS INDICATIVES, SOUS RÉSERVE DE DISPONIBILITÉ.</small></footer>
      <a className="floating-wa" href="https://wa.me/6285945360055" target="_blank" rel="noreferrer" aria-label="Contacter sur WhatsApp">WA</a>
    </main>
  );
}
