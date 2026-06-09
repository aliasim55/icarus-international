import { ArrowRight, Check } from 'lucide-react';
import { PageHero } from '../components/PageHero.jsx';
import { QuoteSection } from '../components/QuoteSection.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { asset, services } from '../data.js';

export function CapabilitiesPage() {
  return (
    <>
      <PageHero
        image={asset("assets/background/services-main.jpg")}
        kicker="Capabilities"
        title="We Are Expert In Aviation Support"
        text="A dedicated view of Icarus International capabilities across sourcing, logistics, integration, repair coordination, and aviation consulting."
      />

      <section className="section detail-section">
        <div className="container">
          <SectionHeading
            align="center"
            kicker="Icarus International"
            title="Capabilities For All type of Civilian and Military Applications"
            text="Each capability is shaped around practical outcomes: faster sourcing, cleaner coordination, reduced downtime, and clearer decision-making."
          />

          <div className="detail-list">
            {services.map(({ title, detail, points, image, slug, icon: Icon }) => (
              <article className="detail-card" id={slug} key={slug}>
                <div className="detail-card__image">
                  <img src={image} alt="" />
                </div>
                <div className="detail-card__body">
                  <span className="detail-card__icon" aria-hidden="true">
                    <Icon size={25} />
                  </span>
                  <h2>{title}</h2>
                  <p>{detail}</p>
                  <ul className="check-list">
                    {points.map((point) => (
                      <li key={point}>
                        <Check size={17} aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a className="text-link" href="/contact">
                    Request this capability
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
