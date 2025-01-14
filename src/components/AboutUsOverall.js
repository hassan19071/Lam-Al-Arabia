import React from "react";
import "./style/about.scss";
import AboutImg from "../assets/about-us.jpg";
import MissionIcon from "../assets/mission.png";
import VisionIcon from "../assets/shared-vision.png";
import ApprochIcon from "../assets/methods.png";
import ExpertiseIcon from "../assets/expert.png";
import ValuesIcon from "../assets/value.png";

function AboutUsOverall() {
  return (
    <div className="about-us py-5">
      <div className="container px-lg-5 py-5">
        <div className="row">
          <div className="col-lg-6 pe-lg-3">
            <div className="about-us-img">
              <img
                src={AboutImg}
                alt="Professional consulting"
                width="100%"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-lg-6 mt-lg-0 mt-4">
            <div className="about-us-text">
              <div className="head-section-title">
                <span className="over-title">Get To Know Us</span>
                <h2>
                  <span className="first-lines"></span>
                  <span className="title">About Lam Al Arabia</span>
                  <span className="last-lines"></span>
                </h2>
              </div>
              <p className="mt-3">
                Lam Al Arabia Professional Consulting is a leading consulting
                firm that prides itself on delivering bespoke business solutions
                tailored to meet the unique needs of organizations across a
                broad range of industries. With a reputation built on trust,
                expertise, and innovation, we are committed to empowering
                businesses to reach their full potential by providing strategic
                direction, operational optimization, and cutting-edge solutions
                that drive sustainable success.
              </p>
              <p>
                At Lam Al Arabia, we believe in fostering long-term
                relationships with our clients by providing continuous support
                and guiding them through every step of their business journey.
                Our team of experts is always ready to assist with new
                challenges and offer insights to create transformative changes
                that drive growth and profitability.
              </p>
            </div>
          </div>
        </div>

        <section className="company-grid mt-5">
          <article className="company-feature d-flex">
            <div className="icon me-3">
              <img
                src={MissionIcon}
                alt="Mission of Lam Al Arabia Professional Consulting"
              />
            </div>
            <div className="text">
              <h3>Our Mission</h3>
              <p>
                Our mission is simple – to help organizations thrive in today’s
                fast-evolving and competitive marketplace. We achieve this by
                leveraging our deep industry knowledge, technical expertise, and
                forward-thinking strategies. At Lam Al Arabia, we believe in
                creating long-term value by aligning our services with our
                clients' goals, ensuring the effective implementation of
                customized strategies that result in tangible outcomes.
              </p>
            </div>
          </article>

          <article className="company-feature d-flex">
            <div className="icon me-3">
              <img
                src={VisionIcon}
                alt="Vision of Lam Al Arabia Professional Consulting"
              />
            </div>
            <div className="text">
              <h3>Our Vision</h3>
              <p>
                At Lam Al Arabia Professional Consulting, our vision is to be
                the leading consulting partner for businesses seeking
                sustainable growth and operational excellence in an
                ever-changing global landscape. We aim to be recognized as a
                trusted advisor that delivers unparalleled expertise, innovative
                solutions, and a commitment to long-term success.
              </p>
            </div>
          </article>

          <article className="company-feature d-flex">
            <div className="icon me-3">
              <img
                src={ValuesIcon}
                alt="Values of Lam Al Arabia Professional Consulting"
              />
            </div>
            <div className="text">
              <h3>Our Values</h3>
              <p>
                At Lam Al Arabia Professional Consulting, we value integrity,
                excellence, innovation, and collaboration. We prioritize honesty
                and transparency, deliver high-quality solutions, embrace
                creativity, and work closely with clients to achieve shared
                success through strong, long-term partnerships.
              </p>
            </div>
          </article>

          <article className="company-feature d-flex">
            <div className="icon me-3">
              <img
                src={ExpertiseIcon}
                alt="Expertise of Lam Al Arabia Professional Consulting"
              />
            </div>
            <div className="text">
              <h3>Our Expertise</h3>
              <p>
                At Lam Al Arabia Professional Consulting, our expertise includes
                strategic planning, business development, operational
                efficiency, financial advisory, risk management, market
                research, and technology consulting. We help businesses optimize
                operations, drive growth, and stay competitive in a rapidly
                evolving market.
              </p>
            </div>
          </article>

          <article className="company-feature d-flex">
            <div className="icon me-3">
              <img
                src={ApprochIcon}
                alt="Approach of Lam Al Arabia Professional Consulting"
              />
            </div>
            <div className="text">
              <h3>Our Approach</h3>
              <p>
                At Lam Al Arabia, we believe in a client-centric approach. We
                understand that every business is unique, and therefore, we
                tailor our solutions to align with the specific goals and needs
                of our clients. Our consultants take the time to listen,
                analyze, and collaborate with you at every step, ensuring that
                the strategies we develop are practical, actionable, and deliver
                measurable results.
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default AboutUsOverall;
