import { Clock3, Globe2, ShieldCheck } from 'lucide-react';
import { SectionHeading } from './SectionHeading.jsx';

const partnerPoints = [
  {
    title: 'OEM and distributor routing',
    text: 'Supplier discovery, quote coordination, and documentation checks for critical aviation items.',
    icon: Globe2
  },
  {
    title: 'Repair network support',
    text: 'Repair capability matching and turnaround planning for components, avionics, and overhaul needs.',
    icon: ShieldCheck
  },
  {
    title: 'Time-sensitive escalation',
    text: 'Priority handling for AOG requests, urgent spares, and hard deadlines.',
    icon: Clock3
  }
];

export function Partners() {
  return (
    <section className="section partners" id="partners">
      <div className="container partners__grid">
        <SectionHeading
          kicker="Partners"
          title="A supply network built around dependable response"
          text="Icarus International works across procurement, maintenance, and logistics channels to connect operators with the right aviation support."
        />
        <div className="partner-list">
          {partnerPoints.map(({ title, text, icon: Icon }) => (
            <article className="partner-item" key={title}>
              <span aria-hidden="true">
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
    </section>
  );
}
