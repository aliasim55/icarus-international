import { ArrowRight } from 'lucide-react';
import { products } from '../data.js';
import { SectionHeading } from './SectionHeading.jsx';

export function Products() {
  return (
    <section className="section products" id="products">
      <div className="container">
        <SectionHeading
          align="center"
          kicker="Products"
          title="Our Products"
          text="Procurements categories built around hard-to-source inventory, technical fit, and reliable vendor coordination."
        />

        <div className="card-grid card-grid--three">
          {products.map(({ title, text, image, slug, icon: Icon }) => (
            <article className="product-card" key={title}>
              <a className="product-card__media" href={`/products#${slug}`} aria-label={`View ${title}`}>
                <img src={image} alt="" />
                <span className="product-card__overlay">
                  <span className="product-card__icon" aria-hidden="true">
                    <Icon size={23} />
                  </span>
                  <strong>{title}</strong>
                  <span className="product-card__description">{text}</span>
                  <span className="product-card__cta">
                    Read More
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
