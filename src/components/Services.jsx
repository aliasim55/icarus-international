import { ArrowRight } from 'lucide-react';
import { services } from '../data.js';
import { SectionHeading } from './SectionHeading.jsx';

export function Services() {
  return (
    <section className="section services" id="capabilities">
      <div className="container">
        <SectionHeading
          align="center"
          kicker="Services"
          title="What We Offer"
          text="Focused aviation support for procurement, maintenance planning, logistics, and technical service coordination."
        />

        <div className="card-grid card-grid--four">
          {services.map(({ title, text, image, slug, icon: Icon }) => (
            <article className="service-card" key={title}>
              <div className="service-card__image">
                <img src={image} alt="" />
                <span aria-hidden="true">
                  <Icon size={24} />
                </span>
              </div>
              <div className="service-card__body">
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={`/capabilities#${slug}`}>
                  Read More
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
