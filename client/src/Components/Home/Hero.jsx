// import react from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Stack, Button, Col } from "react-bootstrap";
export default function Hero() {
  return (
    <>
      <Container id="hero" fluid>
        <div className="inst-name">
          <p>
            Shri Guru Gobind Singhji Institute of Engineering and Technology,
            Nanded
          </p>
        </div>
        <Container className="hero-list" md={2}>
          <Stack gap={2} className="main">
            <Button className='cus-btn'><Link className="btn-inside" to="/stlogin">Student</Link> </Button>
            <Button className='cus-btn'>Recruiter</Button>
            <Link to="/admin/signin/">
              <Button style={{ width: "200px" }} className="cus-btn">
                Admin Login
              </Button>
            </Link>
            <Button className='cus-btn'>Current Drives</Button>
            <Button className='cus-btn'>Internship</Button>
          </Stack>
        </Container>
      </Container>
      <section id="hero" className="d-flex justify-content-center align-items-center">
        <div className="container position-relative grid-box" data-aoos="zoom-in" data-aoos-delay="100">

          <div className="login-section mt-5">
            <Link to="/stlogin"><button className="cus-btn">Student</button></Link>
            <a className="cus-btn" role="button">Recruiter</a>
            <a className="cus-btn" role="button">Admin</a>
            <a className="cus-btn" href="#" role="button">Current Drives</a>
            <a className="cus-btn" href="#" role="button">Internships</a>
          </div>

        </div>
      </section>
    </>
  );
}
