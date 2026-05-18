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
            text="Icarus International supports the community with parts, supplies, repair coordination, consulting, and brokerage services shaped around fast, dependable execution."
          />
          <p>
            We help operators keep aircraft available by pairing disciplined procurement with responsive AOG support. Our work is built around clear communication, verified sourcing, and long-term relationships with customers and suppliers.
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
