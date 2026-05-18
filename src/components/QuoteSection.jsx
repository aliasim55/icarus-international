import { useState } from 'react';
import { Send } from 'lucide-react';

const topics = [
  'Supply-Chain Management',
  'Repair Service',
  'Parts and Components',
  'Avionics',
  'Ground Support Equipment',
  'Other Information'
];

export function QuoteSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="quote" id="quote">
      <div className="container quote__grid">
        <div className="quote__copy">
          <p className="eyebrow">Request a call back</p>
          <h2>Need an aviation part, repair path, or logistics answer?</h2>
          <p>
            Send the requirement and Icarus International will help route the request to the right capability.
          </p>
        </div>

        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              <span>Name</span>
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" placeholder="name@company.com" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              <span>Phone</span>
              <input name="phone" type="tel" placeholder="+1 000 000 0000" />
            </label>
            <label>
              <span>I would like to discuss</span>
              <select name="topic" defaultValue={topics[0]}>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button className="button button--primary" type="submit">
            Submit Now
            <Send size={17} aria-hidden="true" />
          </button>
          {submitted ? <p className="form-status">Thank you. Your request is ready for follow-up.</p> : null}
        </form>
      </div>
    </section>
  );
}
