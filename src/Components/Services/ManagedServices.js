import React from 'react';
import Footer from '../Footer/Footer';

const ManagedServices = () => {
  return (
    <>
      <div className="managed-services">
        <section className="section">
          <div className="header">
            <h1>Managed Services</h1>
            <p>
              Skyra Infotech provides the best Infrastructure management services.
              Skyra Infotech is one of the leading enterprises' most preferred IT Managed Services Providers, especially in the Banking, Financial Services, and Insurance (BFSI) space.
              We are a strategic IT outsourcing partner that can help you transform IT operations for maximum positive business impact.
            </p>
          </div>

          <article className="article">
            <p>
              Our Applications Managed Services Team comes with <b>extensive expertise</b> in managing the entire Application Landscape including development support and maintenance across support levels from L0 to L3 (wherein we co-ordinate with the respective OEMs of standard applications) to ensure <b>business continuity</b>.
              We enable our customers to focus on their core business while we ensure that their applications – both core and non-core, as well as custom applications function seamlessly.
              Once a certain level of stability is reached, our team works on improvements such as <b>intelligent automation</b> to accelerate efficiency and reduce human intervention.
            </p>
          </article>

          <article className="article">
            <h2>List of the Processes</h2>
            <ul>
              <li>
                <strong>Incident Management:</strong> Incident management is a process in the ITIL framework that connects end-users and the IT department for more efficient incident response.
                It is a process used by development and IT Operations teams to respond to an unplanned event or service interruption and restore the service to its operational state.
              </li>
              <li>
                <strong>Change Management:</strong> Change management is the process that businesses and organizations use to implement changes through building and delivering effective change strategies.
                It includes reviewing reasons for change, implementing changes, and helping people adapt to these changes.
              </li>
              <li>
                <strong>Problem Management:</strong> The goal of problem management is to eliminate recurring incidents, prevent future incidents, and minimize the impact of incidents that cannot be prevented.
                This involves diagnosing root causes and taking the proper steps towards resolving the issue.
              </li>
            </ul>
          </article>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ManagedServices;
