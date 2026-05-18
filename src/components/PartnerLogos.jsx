import { partnerLogos } from '../data.js';
import { SectionHeading } from './SectionHeading.jsx';

export function PartnerLogos() {
  return (
    <section className="section partner-logos" id="global-partners">
      <div className="container">
        <SectionHeading align="center" kicker="Network" title="Global Partners" />

        <div className="partner-logo-grid" aria-label="Global partner logos">
          {partnerLogos.map((partner) => (
            <article className="partner-logo-card" key={partner.name}>
              <img src={partner.image} alt={`${partner.name} logo`} loading="lazy" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
