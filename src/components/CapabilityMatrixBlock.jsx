import { Fragment } from 'react';
import { SectionHeading } from './SectionHeading.jsx';
import { capabilityMatrix, componentColumns, repairAccessories, repairPlatforms } from '../data.js';

export function CapabilityMatrixBlock({ embedded = false }) {
  return (
    <div className={embedded ? 'capability-matrix-block capability-matrix-block--embedded' : 'capability-matrix-block'}>
      <SectionHeading
        align="center"
        kicker="Capabilities"
        title="We Specialize In Repair And Overhaul"
        text="Review platform support, component categories, and commercial capability coverage across aircraft, engine, and helicopter requirements."
      />

      <div className="platform-grid" aria-label="Supported aircraft platforms">
        {repairPlatforms.map((platform) => (
          <article className="platform-card" key={platform}>
            <h3>{platform}</h3>
          </article>
        ))}
      </div>

      <div className="accessory-panel">
        <h2>Experts in the Repair and Overhaul</h2>
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
  );
}
