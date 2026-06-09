import { ArrowRight, Check } from 'lucide-react';
import { PageHero } from '../components/PageHero.jsx';
import { QuoteSection } from '../components/QuoteSection.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { asset, products } from '../data.js';

export function ProductsPage() {
  return (
    <>
      <PageHero
        image={asset("assets/main-slider/3.jpg")}
        kicker="Products"
        title="Products And Equipment"
        text="Dedicated product support for avionics, and ground support equipment across urgent and planned requirements."
      />

      <section className="section detail-section products-detail-section">
        <div className="container">
          <SectionHeading
            align="center"
            kicker="Our Products"
            title="Sourcing components for active fleets, ground support equipment, and critical backend machinery."
            text="Icarus International helps operators find the right items, verify fit, and move requirements through the supply chain with less friction."
          />

          <div className="detail-list">
            {products.map(({ title, detail, points, image, slug, icon: Icon }) => (
              <article className="detail-card detail-card--product" id={slug} key={slug}>
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
                    Send a product request
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
