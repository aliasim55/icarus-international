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
            With over 30 years of experience in the Industry Icarus International, a sister concern of Vyadom International, supports customers through parts supply, procurement assistance, repair coordination, consulting, maintenance, upgradation, and brokerage services. Our expertise spans aircraft components, forged industrial parts, heavy machinery, and facility support, helping clients source the right materials, coordinate reliable technical solutions, and keep critical operations moving with clarity and confidence.
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
