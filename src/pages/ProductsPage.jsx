import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { CapabilityMatrixBlock } from '../components/CapabilityMatrixBlock.jsx';
import { PageHero } from '../components/PageHero.jsx';
import { QuoteSection } from '../components/QuoteSection.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { asset, forgedIndustries, groundSupportFeatures, products } from '../data.js';

export function ProductsPage() {
  const [openRequest, setOpenRequest] = useState(null);

  const toggleRequest = (slug) => {
    setOpenRequest((current) => (current === slug ? null : slug));
  };

  return (
    <>
      <PageHero
        image={asset("assets/main-slider/3.jpg")}
        kicker="Products"
        title="Products And Equipment"
        text="Dedicated product support for avionics, and ground support equipment across urgent and planned requirements."
      />

      <section className="section detail-section products-detail-section">
        <div className="container">
          <SectionHeading
            align="center"
            kicker="Our Products"
            title="Sourcing components for active fleets, ground support equipment, and critical backend machinery."
            text="Icarus International helps operators find the right items, verify fit, and move requirements through the supply chain with less friction."
          />

          <div className="detail-list">
            {products.map(({ title, detail, points, image, slug, icon: Icon }) => {
              const panelId = `${slug}-request-panel`;
              const isOpen = openRequest === slug;
              const isAvionics = slug === 'avionics';
              const isForged = slug === 'parts-components';
              const isGroundSupport = slug === 'ground-support-equipment';

              return (
                <article
                  className={isOpen ? 'detail-card detail-card--product detail-card--expanded' : 'detail-card detail-card--product'}
                  id={slug}
                  key={slug}
                >
                  <div className="detail-card__image">
                    <img src={image} alt="" />
                  </div>
                  <div className="detail-card__body">
                    <span className="detail-card__icon" aria-hidden="true">
                      <Icon size={25} />
                    </span>
                    <h2>{title}</h2>
                    <p>{detail}</p>
                    <ul className="check-list">
                      {points.map((point) => (
                        <li key={point}>
                          <Check size={17} aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <button
                      aria-controls={panelId}
                      aria-expanded={isOpen}
                      className="text-link text-link--button"
                      onClick={() => toggleRequest(slug)}
                      type="button"
                    >
                      Get more details
                      <ArrowRight size={16} aria-hidden="true" />
                    </button>
                  </div>
                  <div
                    aria-hidden={!isOpen}
                    className={[
                      'product-request-panel',
                      isAvionics ? 'product-request-panel--matrix' : '',
                      isForged ? 'product-request-panel--industries' : '',
                      isGroundSupport ? 'product-request-panel--equipment' : '',
                      isOpen ? 'product-request-panel--open' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    id={panelId}
                  >
                    {isOpen ? (
                      <div className="product-request-panel__inner">
                        {isAvionics ? (
                          <CapabilityMatrixBlock embedded />
                        ) : (
                          <>
                            {isForged ? <p className="eyebrow">Request details</p> : null}
                            {!isGroundSupport ? (
                              <>
                                <h3>{`${title} Across Multiple Industries`}</h3>
                                <p>
                                  Share the requirement, specifications, drawings, quantities, timeline, and any supporting documents. Our team will review the scope and route it through the right sourcing.
                                </p>
                              </>
                            ) : null}
                            {isForged ? (
                              <div className="platform-grid industry-platform-grid" aria-label="Industries served by forged components">
                                {forgedIndustries.map(({ title: industryTitle, image: industryImage, position }) => (
                                  <article
                                    className="platform-card platform-card--industry"
                                    key={industryTitle}
                                    style={{
                                      '--platform-card-image': `url(${industryImage})`,
                                      '--platform-card-position': position,
                                    }}
                                  >
                                    <h3>{industryTitle}</h3>
                                  </article>
                                ))}
                              </div>
                            ) : null}
                            {isGroundSupport ? (
                              <div className="equipment-feature-grid" aria-label="Ground support equipment examples">
                                {groundSupportFeatures.map(({ title: featureTitle, image: featureImage, text: featureText }) => (
                                  <article className="equipment-feature-card" key={featureTitle}>
                                    <img src={featureImage} alt="" />
                                    <div>
                                      <h4>{featureTitle}</h4>
                                      <p>{featureText}</p>
                                    </div>
                                  </article>
                                ))}
                              </div>
                            ) : null}
                          </>
                        )}
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
