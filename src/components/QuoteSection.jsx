import { ArrowRight } from 'lucide-react';

export function QuoteSection() {
  return (
    <section className="quote" id="request-callback">
      <div className="container quote__grid">
        <div className="quote__copy">
          <p className="eyebrow">Request a call back</p>
          <h2>Need support with forgings, upgrades, or aviation logistics?</h2>
          <p>
            Share your requirement and Icarus International will align it with the right capability, supplier path, or technical support channel.
          </p>
          <div className="quote__actions">
            <a className="button button--primary" href="/contact">
              Contact Us
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
