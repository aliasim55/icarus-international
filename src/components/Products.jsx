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
          text="Aircraft support categories built around hard-to-source inventory, technical fit, and reliable vendor coordination."
        />

        <div className="card-grid card-grid--three">
          {products.map(({ title, text, image, slug, icon: Icon }) => (
            <article className="product-card" key={title}>
              <img src={image} alt="" />
              <div className="product-card__body">
                <span className="product-card__icon" aria-hidden="true">
                  <Icon size={23} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={`/products#${slug}`}>
                  Read More
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
