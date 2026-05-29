import { aboutHighlights } from '../data.js';
import { SectionHeading } from './SectionHeading.jsx';

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__content">
          <SectionHeading
            kicker="About"
            title="Welcome to Icarus International"
            text=""
          />
          <p>
          Icarus International supports aviation and industrial customers with a practical blend of parts supply, procurement support, repair coordination, consulting, maintenance upgradation, and brokerage services. Our work extends across aircraft components, forged industrial parts, heavy machinery, and facility support, helping customers source the right materials, coordinate dependable technical pathways, and keep critical operations moving with clear communication 
          </p>

          <div className="about__badge">
            <strong>10,000+</strong>
            <span>line items supported across urgent and planned orders</span>
          </div>

          <div className="highlight-grid">
            {aboutHighlights.map(({ title, text, icon: Icon }) => (
              <article className="highlight" key={title}>
                <span className="highlight__icon" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
