import { ArrowRight } from 'lucide-react';
import { heroSlides } from '../data.js';

export function Hero({ activeSlide, setActiveSlide }) {
  const slide = heroSlides[activeSlide];

  return (
    <section className="hero" id="home" aria-label="Icarus International">
      {heroSlides.map((item, index) => (
        <div
          aria-hidden="true"
          className={index === activeSlide ? 'hero__image hero__image--active' : 'hero__image'}
          key={item.image}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundPosition: item.imagePosition || 'center',
          }}
        />
      ))}

      <div className="container hero__content">
        <p className="eyebrow">{slide.kicker}</p>
        <h1>{slide.title}</h1>
        <p>{slide.text}</p>
        <div className="hero__actions">
          <a className="button button--primary" href={slide.href}>
            {slide.action}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button button--ghost" href="/products">
            Explore Products
          </a>
        </div>
        <div className="hero__dots" aria-label="Hero slides">
          {heroSlides.map((item, index) => (
            <button
              aria-label={`Show slide ${index + 1}: ${item.title}`}
              className={index === activeSlide ? 'hero__dot hero__dot--active' : 'hero__dot'}
              key={item.title}
              onClick={() => setActiveSlide(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
