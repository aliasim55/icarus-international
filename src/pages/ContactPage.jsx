import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { PageHero } from '../components/PageHero.jsx';
import { asset } from '../data.js';

const SPLITFORMS_ENDPOINT = 'https://splitforms.com/api/submit';
const SPLITFORMS_ACCESS_KEY = import.meta.env.VITE_SPLITFORMS_ACCESS_KEY;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
  companyWebsite: '',
};

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

function validateForm(values) {
  const errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (name.length < 2) {
    errors.name = 'Please enter your full name.';
  } else if (name.length > 80) {
    errors.name = 'Name must be 80 characters or fewer.';
  }

  if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.';
  } else if (email.length > 254) {
    errors.email = 'Email address is too long.';
  }

  if (subject.length < 3) {
    errors.subject = 'Please enter a subject.';
  } else if (subject.length > 120) {
    errors.subject = 'Subject must be 120 characters or fewer.';
  }

  if (message.length < 10) {
    errors.message = 'Please include a little more detail.';
  } else if (message.length > 2000) {
    errors.message = 'Message must be 2000 characters or fewer.';
  }

  return errors;
}

export function ContactPage() {
  const [values, setValues] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'idle', message: '' });

    const nextErrors = validateForm(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({ type: 'error', message: 'Please fix the highlighted fields and try again.' });
      return;
    }

    if (values.companyWebsite.trim()) {
      setValues(INITIAL_FORM);
      setStatus({ type: 'success', message: 'Thank you. Your message has been sent.' });
      return;
    }

    if (!SPLITFORMS_ACCESS_KEY) {
      setStatus({
        type: 'error',
        message: 'The contact form is not configured yet. Please add VITE_SPLITFORMS_ACCESS_KEY.',
      });
      return;
    }

    const payload = new FormData();
    payload.append('access_key', SPLITFORMS_ACCESS_KEY);
    payload.append('name', values.name.trim());
    payload.append('email', values.email.trim());
    payload.append('subject', values.subject.trim());
    payload.append('message', values.message.trim());
    payload.append('source', 'Icarus International website contact page');

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 12000);

    try {
      setStatus({ type: 'submitting', message: 'Sending your message...' });

      const response = await fetch(SPLITFORMS_ENDPOINT, {
        method: 'POST',
        body: payload,
        headers: {
          Accept: 'application/json',
        },
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error('Unable to send your message right now.');
      }

      setValues(INITIAL_FORM);
      setErrors({});
      setStatus({ type: 'success', message: 'Thank you. Your message has been sent.' });
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error.name === 'AbortError'
            ? 'The request timed out. Please try again.'
            : 'Unable to send your message right now. Please email info@icarusintl.com.',
      });
    } finally {
      window.clearTimeout(timeout);
    }
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

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <label className="contact-honey-field" aria-hidden="true">
                <span>Company website</span>
                <input
                  name="companyWebsite"
                  type="text"
                  tabIndex="-1"
                  autoComplete="off"
                  value={values.companyWebsite}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span>Name</span>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  autoComplete="name"
                  maxLength="80"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  required
                />
                {errors.name ? <small className="field-error" id="name-error">{errors.name}</small> : null}
              </label>

              <label>
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  maxLength="254"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  required
                />
                {errors.email ? <small className="field-error" id="email-error">{errors.email}</small> : null}
              </label>

              <label>
                <span>Subject</span>
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  maxLength="120"
                  value={values.subject}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  required
                />
                {errors.subject ? <small className="field-error" id="subject-error">{errors.subject}</small> : null}
              </label>

              <label>
                <span>Message</span>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="6"
                  maxLength="2000"
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  required
                />
                {errors.message ? <small className="field-error" id="message-error">{errors.message}</small> : null}
              </label>

              <button className="button button--primary" type="submit" disabled={status.type === 'submitting'}>
                {status.type === 'submitting' ? 'Sending' : 'Submit'}
                <Send size={17} aria-hidden="true" />
              </button>

              {status.message ? (
                <p className={`form-status form-status--${status.type}`} aria-live="polite">
                  {status.message}
                </p>
              ) : null}
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
