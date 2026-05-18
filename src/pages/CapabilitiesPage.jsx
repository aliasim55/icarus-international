import { Fragment } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { PageHero } from '../components/PageHero.jsx';
import { QuoteSection } from '../components/QuoteSection.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { asset, capabilityMatrix, componentColumns, repairAccessories, repairPlatforms, services } from '../data.js';

export function CapabilitiesPage() {
  return (
    <>
      <PageHero
        image={asset("assets/background/services-main.jpg")}
        kicker="Capabilities"
        title="We Are Expert In Aviation Support"
        text="A dedicated view of Icarus International capabilities across sourcing, logistics, integration, repair coordination, and aviation consulting."
      />

      <section className="section capability-matrix-section">
        <div className="container">
          <SectionHeading
            align="center"
            kicker="Capabilities"
            title="We Specialize In Repair And Overhaul"
            text="Review platform support, component categories, and commercial capability coverage across aircraft, engine, and helicopter requirements."
          />

          <div className="platform-grid" aria-label="Supported aircraft platforms">
            {repairPlatforms.map((platform) => (
              <article className="platform-card" key={platform}>
                <span aria-hidden="true">Aircraft</span>
                <h3>{platform}</h3>
              </article>
            ))}
          </div>

          <div className="accessory-panel">
            <h2>We are experts in the repair and overhaul of:</h2>
            <ul className="accessory-grid">
              {repairAccessories.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="matrix-heading">
            <p className="eyebrow">Commercial Capabilities Listing</p>
            <h2>Component Types For Various Makes And Models</h2>
          </div>

          <div className="matrix-scroll" role="region" aria-label="Commercial capabilities listing" tabIndex="0">
            <table className="capability-table">
              <thead>
                <tr>
                  <th scope="col">Aircraft / OEM Type</th>
                  {componentColumns.map((column) => (
                    <th scope="col" key={column}>
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {capabilityMatrix.map((group) => (
                  <Fragment key={group.group}>
                    <tr className="capability-table__group" key={`${group.group}-heading`}>
                      <th colSpan={componentColumns.length + 1} scope="colgroup">
                        {group.group}
                      </th>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={`${group.group}-${row.type}-${row.models}`}>
                        <th scope="row">
                          <strong>{row.type}</strong>
                          <span>{row.models}</span>
                        </th>
                        {row.capabilities.map((available, index) => (
                          <td key={`${row.type}-${row.models}-${componentColumns[index]}`}>
                            {available ? (
                              <span className="matrix-mark matrix-mark--yes" aria-label="Available">
                                ✓
                              </span>
                            ) : (
                              <span className="matrix-mark matrix-mark--no" aria-label="Not listed">
                                ×
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section detail-section">
        <div className="container">
          <SectionHeading
            align="center"
            kicker="Icarus International"
            title="Capabilities Built For Aircraft Availability"
            text="Each capability is shaped around practical outcomes: faster sourcing, cleaner coordination, reduced downtime, and clearer decision-making."
          />

          <div className="detail-list">
            {services.map(({ title, detail, points, image, slug, icon: Icon }) => (
              <article className="detail-card" id={slug} key={slug}>
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
                  <a className="text-link" href="/#quote">
                    Request this capability
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
