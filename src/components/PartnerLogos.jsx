import { partnerLogos } from '../data.js';
import { SectionHeading } from './SectionHeading.jsx';

export function PartnerLogos() {
  const logoRows = [
    partnerLogos,
    [...partnerLogos].reverse()
  ];
  const logoCopies = [0, 1, 2];

  return (
    <section className="section partner-logos" id="global-partners">
      <div className="container">
        <SectionHeading align="center" kicker="Network" title="Global Partners" />

        <div className="partner-logo-stage" aria-label="Global partner logos">
          {logoRows.map((row, index) => (
            <div
              className={`partner-logo-marquee ${index === 1 ? 'partner-logo-marquee--reverse' : ''}`}
              key={index === 0 ? 'top-row' : 'bottom-row'}
            >
              <div className="partner-logo-track">
                {logoCopies.map((copyIndex) => (
                  <div
                    className="partner-logo-set"
                    key={`${index}-${copyIndex}`}
                    aria-hidden={copyIndex > 0 ? 'true' : undefined}
                  >
                    {row.map((partner) => (
                      <article className="partner-logo-card" key={`${partner.name}-${copyIndex}`}>
                        <img src={partner.image} alt={`${partner.name} logo`} loading="lazy" />
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
