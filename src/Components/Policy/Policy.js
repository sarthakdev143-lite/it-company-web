import React from 'react'
import './Policy.css'
import Footer from '../Footer/Footer'

const Policy = () => {
  return (
    <>
      <main id='policy-container'>
        <h1 id='heading'>
          <span># Privacy Policies Of Skyra Tech Solution Pvt. Ltd</span><hr />
        </h1>
        <p>
          Skyra Tech Solution Pvt. Ltd is committed to protecting the privacy and security of your personal
          information. This Privacy Policy outlines how we collect, use, disclose, and protect the information you
          provide to us.
        </p>

        <section>
          <h2>Information We Collect:</h2>
          <article>
            <h3>Personal Information:</h3>
            <p>We may collect personal information such as your name, email address, phone number, and address when you fill out forms on our website or contact us.</p>
          </article>
          <article>
            <h3>Usage Data:</h3>
            <p>We may collect information about how you interact with our website, including your IP address, browser type, pages visited, and time spent on our site.</p>
          </article>
        </section>

        <section>
          <h2>How We Use Your Information:</h2>
          <article>
            <h3>To Provide Services:</h3>
            <p>We may use your information to provide you with the products and services you request.</p>
          </article>
          <article>
            <h3>To Communicate:</h3>
            <p>We may use your information to communicate with you about your inquiries, orders, and account-related matters.</p>
          </article>
          <article>
            <h3>To Improve Our Services:</h3>
            <p>We may use your information to analyze trends, improve our website, and develop new products and services.</p>
          </article>
        </section>

        <section>
          <h2>Information Sharing and Disclosure:</h2>
          <article>
            <h3>Third-Party Service Providers:</h3>
            <p>We may share your information with third-party service providers who help us operate our website and provide services.</p>
          </article>
          <article>
            <h3>Legal Compliance:</h3>
            <p>We may disclose your information when required by law or to protect our rights, property, or safety.</p>
          </article>
        </section>

        <section>
          <h2>Data Security:</h2>
          <p>We take reasonable measures to protect the security of your personal information and prevent unauthorized access, use, or disclosure.</p>
        </section>

        <section>
          <h2>Your Choices:</h2>
          <p>You may choose not to provide certain information, but this may limit your ability to use certain website features or receive services from us.</p>
        </section>

        <section>
          <h2>Changes to This Privacy Policy:</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        </section>

        <section>
          <h2>Contact Us:</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href='mailto:info@skyratech.in'>info@skyratech.in.</a></p>
        </section>

      </main>
      <Footer />
    </>
  )
}

export default Policy