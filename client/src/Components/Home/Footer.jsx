import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Stack } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <Container className="footer" fluid>
        <Row className="f-row">
          <Col className="f-col f-about">
            <h2>About</h2>
            <p>
              {" "}
              This is one of the prestigious institutes in the state of
              Maharashtra. This institute provides you the opportunities to
              empower you with the present technologies. The faculty in the
              institute is ever enthusiastic to familiarize the students in
              future technology trends.{" "}
            </p>
            <Stack className="about-social" direction="horizontal">
              <a
                href="https://www.facebook.com/people/Tnpcell-Sggsiet/100073430083642/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon color="#3b5998" icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com/tnp_sggsiet"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon color="#1da1f2" icon={faTwitter} />
              </a>
              <a
                href="https://www.instagram.com/tnp_sggsiet/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon color="#ffc0cb" icon={faInstagram} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCxK3BwLWib2jd8y80CbD4DA"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon color="#ff0000" icon={faYoutube} />
              </a>
              <a
                href="https://www.linkedin.com/in/sggs-tnpcell/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon color="#0e76a8" icon={faLinkedinIn} />
              </a>
            </Stack>
          </Col>
          <Col className="f-col f-ql">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/placements">Placements</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </Col>
          <Col className="f-col f-ci">
            <h2>Contact Info</h2>
            <Stack>
              <div className="ci-cell">
                <FontAwesomeIcon
                  size="2x"
                  color="#0d6efd"
                  className="ci-icon"
                  icon={faMapMarkerAlt}
                />
                <div className="ci-cell-div">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://maps.app.goo.gl/KdkCbFL9v8gFrEm98"
                  >
                    SGGSIE&T, <br /> Vishunupuri, Nanded
                  </a>
                </div>
              </div>
              <div className="ci-cell">
                <FontAwesomeIcon
                  size="2x"
                  color="#0d6efd"
                  className="ci-icon"
                  icon={faPhone}
                />
                <div
                  className="ci-cell-div"
                  style={{ alignItems: "center", color: "#fff" }}
                >
                  <div>
                    TPO Dean IL:&nbsp;
                    <a href="tel:7588428778">+91 75884 28778</a>
                    <br />
                    TPO Assistant:&nbsp;
                    <a href="tel:7507877206">+91 75078 77206</a>
                  </div>
                </div>
              </div>
              <div className="ci-cell">
                <FontAwesomeIcon
                  size="2x"
                  color="#0d6efd"
                  className="ci-icon"
                  icon={faEnvelopeOpen}
                />
                <div
                  className="ci-cell-div"
                  style={{ alignItems: "center", color: "#fff" }}
                >
                  <div>
                    <a href="mailto:tpo@sggs.ac.in">tpo@sggs.ac.in</a>
                    <br />
                    <a href="mailto:tnpcell@sggs.ac.in">tnpcell@sggs.ac.in</a>
                  </div>
                </div>
              </div>
            </Stack>
          </Col>
        </Row>
        <div className="copyright">
          copyright @2022 SGGSIE&T. All Rights Reserved.
        </div>
      </Container>

      {/* <footer>
    <div class="container">
      <div class="sec aboutus">
        <h2>About Us</h2>
        <p> This is one of the prestigious institutes in the state of Maharashtra. This institute provides you the opportunities to empower you with the present technologies. The faculty in the institute is ever enthusiastic to familiarize the students in future technology trends. 
        </p>

        <ul class="sci">
            <li><a href="https://m.facebook.com/profile.php?id=100073430083642&refid=52&__tn__=C-R#_=_"><FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a href="https://twitter.com/tnpcell_sggsiet"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="https://www.instagram.com/tnpcell_sggsnanded/"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
            <li><a href="https://www.linkedin.com/in/sggs-tnpcell/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          </ul>
      </div>

      <div class="sec quickLinks">
        <h2 id="Ql">Quick Links</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Why SGGSIE&T</a></li>
          <li><a href="#">Achievments</a></li>
          <li><a href="#">Statistics</a></li>
          <li><a href="#">Our Recruiters</a></li>
          <li><a href="#">Our Team</a></li>
        </ul>
      </div>

      <div class="sec contact">
        <h2>Contact Info</h2>
        <ul class="info">
          <li>
            <span><i class="fas fa-map-marker-alt"></i></span>
            <p><a target="_blank" href="https://maps.app.goo.gl/KdkCbFL9v8gFrEm98">
                SGGSIE&T <br /> Vishunupuri <br /> Nanded .
              </a></p>
          </li>
          <li>
            <span><i class="fas fa-phone-square-alt"></i></span>
            <p>
              <a href="tel:123456789">+91 9876543210</a>
            </p>
          </li>
          <li>
            <span><i class="fas fa-envelope-open"></i></span>
            <p><a href="mail to:tnpcell@sggs.ac.in">tnpcell@sggs.ac.in</a></p>
          </li>
        </ul>
      </div>
      <div class="copyright">
        <p>copyright @2021 SGGSIT&E . All Rights Reserved.</p>
      </div>
    </div>
  </footer> */}
    </>
  );
}
