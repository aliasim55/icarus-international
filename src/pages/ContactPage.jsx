import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { PageHero } from '../components/PageHero.jsx';
import { asset } from '../data.js';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Address',
    value: '4409, UP Tower 77, Sheikh Zayed Road, Dubai Silicon Oasis, UAE',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+971-50-278 9383',
    href: 'tel:+971502789383',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@icarusintl.com',
    href: 'mailto:info@icarusintl.com',
  },
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        image={asset('assets/background/image-1.jpg')}
        kicker="Contact Us"
        title="Send Us Your Requirement"
        text="Reach Icarus International for aircraft parts, repair coordination, procurement support, and aviation consulting requests."
      />

      <section className="section contact-page-section">
        <div className="container contact-page-grid">
          <div className="contact-message">
            <p className="eyebrow">Send us message</p>
            <h2>Tell us what your operation needs.</h2>
            <p>
              If you have any query, requirement, or urgent aviation support request, please do not hesitate to contact us.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Name</span>
                <input name="name" type="text" placeholder="Name" required />
              </label>

              <label>
                <span>Email</span>
                <input name="email" type="email" placeholder="Email" required />
              </label>

              <label>
                <span>Message</span>
                <textarea name="message" placeholder="Message" rows="6" required />
              </label>

              <button className="button button--primary" type="submit">
                Submit
                <Send size={17} aria-hidden="true" />
              </button>

              {submitted ? <p className="form-status">Thank you. Your message is ready for follow-up.</p> : null}
            </form>
          </div>

          <aside className="contact-info-panel" aria-label="Contact information">
            <div className="contact-info-copy">
              <p className="eyebrow">Contact info</p>
              <h2>Get in touch with our aviation support team.</h2>
              <p>
                We help operators and suppliers coordinate clear next steps for sourcing, documentation, and maintenance support.
              </p>
            </div>

            <div className="contact-info-card">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div className="contact-info-item" key={label}>
                  <span className="contact-info-icon" aria-hidden="true">
                    <Icon size={23} />
                  </span>
                  <div>
                    <strong>{label}</strong>
                    {href ? <a href={href}>{value}</a> : <span>{value}</span>}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
