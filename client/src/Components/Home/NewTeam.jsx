import React from "react";

import RNJoshi from "../../img/rnjoshi-sir.png";
import YVJoshi from "../../img/joshi sir.jpg";
import IGavakhore from "../../img/ishwar-sir.jpg";

import RajatV from "../../img/team/rajatv.JPG";
import SakshiM from "../../img/team/sakshim.jpg";
import AditiS from "../../img/team/aditis.jpg";
import DhirajC from "../../img/team/dhirajc.jpg";
import SakshiJ from "../../img/team/sakshij.jpg";
import AjinkyaD from "../../img/team/ajinkyad.jpg";
import GauravP from "../../img/team/gauravp.jpg";
import VaishnaviU from "../../img/team/vaishnaviu.jpg";
import AmodM from "../../img/team/amodm.jpeg";
import JanhviG from "../../img/team/janhvig.jpg";
import PranavU from "../../img/team/pranavu.jpg";
import RahulW from "../../img/team/rahulw.jpg";
import OmrajD from "../../img/team/omrajd.jpg";
import ShamliK from "../../img/team/shamlik.jpg";
import AniketB from "../../img/bg.jpg";
import AryanB from "../../img/team/aryanb.jpg";
import MallinathH from "../../img/team/mallinathh.jpg";
import PratikB from "../../img/team/pratikb.jpg";
import SandeshB from "../../img/team/sandeshb.jpeg";
import SanskrutiJ from "../../img/team/sanskrutij.jpg";
import SwapnaliN from "../../img/team/swapnalin.jpg";
import VyankateshK from "../../img/team/vyankateshk.jpg";
import YashK from "../../img/team/yashk.jpg";

import Hexagons from "../../img/hexagons.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Container, Row, Col } from "react-bootstrap";

const HeadCard = (props) => {
  return (
    <Container className="contact" id="contactus" fluid>
      <Container className="contact-main">
        <Row>
          <Col lg={4}>
            <div className="cm-img">
              <img src={props.img} />
            </div>
          </Col>
          <Col className="cm-data" lg={8}>
            <div className="cm-inner">
              <h4>{props.name}</h4>
              <p className="subtext">{props.designation}</p>
              <p>
                <FontAwesomeIcon icon={faPhone} /> :{" "}
                <a href={`tel:${props.tel}`}>{props.tel}</a>
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> :{" "}
                <a href={`mailto:${props.mail}`}>{props.mail}</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const TeamCard = (props) => {
  return (
    <div className="st-team-card">
      <img src={props.img} alt="image" />
      <h3>{props.name}</h3>
      <h4>{props.designation}</h4>
      <div className="team-links">
        <a href={`tel:${props.phone}`}>
          <FontAwesomeIcon icon={faPhone} />
        </a>
        <a href={props.lin}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default function NewTeam() {
  return (
    <>
      <div className="head-container">
        <div className="head-bg head-bg-one">
          <img src={Hexagons} alt="" />
        </div>
        <div className="head-bg head-bg-two">
          <img src={Hexagons} alt="" />
        </div>
        <HeadCard
          img={YVJoshi}
          name="Dr. Yashwant Joshi"
          designation="Director"
          tel="02462-229234"
          mail="director@sggs.ac.in"
        />
        <HeadCard
          img={RNJoshi}
          name="Dr. Ravindra Joshi"
          designation="Dean (Industry Liaison), I/C TPO"
          tel="+91 75884 28778"
          mail="tpo@sggs.ac.in"
        />
        <HeadCard
          img={IGavakhore}
          name="Mr. Ishwar Gavakhore"
          designation="Training & Placement Office Assistant"
          tel="+91 75078 77206"
          mail="tnpcell@sggs.ac.in"
        />
      </div>
      <div className="st-team">
        <h3 className="homepage-headings">Student Team</h3>
        <div className="st-team-container">
          <div className="st-team-group st-team-2x">
            <h3>Secretaries</h3>
            <div className="st-team-contents">
              <TeamCard
                img={RajatV}
                name="Rajat Vishwakarma"
                designation="Training & Placement Secretary"
                phone="9820219474"
                mail=""
                lin="https://www.linkedin.com/in/rajat-vishwakarma-123253229"
              />
              <TeamCard
                img={SakshiM}
                name="Sakshi Mundada"
                designation="Training & Placement Secretary"
                phone="9420260270"
                mail="2020bec022@sggs.ac.in"
                lin="https://www.linkedin.com/in/sakshi-mundada-7b6047227"
              />
            </div>
          </div>
          <div className="st-team-group">
            <h3>HR Executives</h3>
            <div className="st-team-contents">
              <TeamCard
                img={AditiS}
                name="Aditi Shahade"
                designation="HR Executive"
                phone="7620223067"
                mail="2020bch008@sggs.ac.in"
                lin="https://www.linkedin.com/in/aditi-shahade-52885a241"
              />
              <TeamCard
                img={DhirajC}
                name="Dhiraj Chavan"
                designation="HR Executive"
                phone="9511837705"
                mail=""
                lin=""
              />
              <TeamCard
                img={SakshiJ}
                name="Sakshi Joshi"
                designation="HR Executive"
                phone="8459919105"
                mail="2020bcs108@sggs.ac.in"
                lin="https://www.linkedin.com/in/sakshi-joshi-7a324520b"
              />
            </div>
          </div>
          <div className="st-team-group">
            <h3>DBMS Executives</h3>
            <div className="st-team-contents">
              <TeamCard
                img={AjinkyaD}
                name="Ajinkya Deshmukh"
                designation="DBMS & Media Executive"
                phone="9146317556"
                mail="2020bec068@sggs.ac.in"
                lin="https://www.linkedin.com/in/ajinkya-deshmukh-03b303213"
              />
              <TeamCard
                img={GauravP}
                name="Gaurav Patil"
                designation="DBMS & Placement Drive Executive"
                phone="9322949096"
                mail="2020bel019@sggs.ac.in"
                lin="https://www.linkedin.com/in/gaurav-patil-4a0110169"
              />
            </div>
          </div>
          <div className="st-team-group">
            <h3>Placement Drive Executives</h3>
            <div className="st-team-contents">
              <TeamCard
                img={VaishnaviU}
                name="Vaishnavi Urmunge"
                designation="Placement Drive & Media Executive"
                phone="9860529951"
                mail="2020bel006@sggs.ac.in"
                lin="https://www.linkedin.com/in/vaishnavi-urmunge-5b0ab4228"
              />
              <TeamCard
                img={GauravP}
                name="Gaurav Patil"
                designation="Placement Drive & DBMS Executive"
                phone="9322949096"
                mail="2020bel019@sggs.ac.in"
                lin="https://www.linkedin.com/in/gaurav-patil-4a0110169"
              />
            </div>
          </div>
          <div className="st-team-group">
            <h3>Media Executives</h3>
            <div className="st-team-contents">
              <TeamCard
                img={AjinkyaD}
                name="Ajinkya Deshmukh"
                designation="Media & DBMS Executive"
                phone="9146317556"
                mail="2020bec068@sggs.ac.in"
                lin="https://www.linkedin.com/in/ajinkya-deshmukh-03b303213"
              />
              <TeamCard
                img={AmodM}
                name="Amod Manjarekar"
                designation="Website Executive"
                phone="9372083529"
                mail="2020bcs107@sggs.ac.in"
                lin="https://www.linkedin.com/in/amod-manjarekar-0a5650180/"
              />
              <TeamCard
                img={JanhviG}
                name="Janhvi Gadewar"
                designation="Media & Content Creation Executive"
                phone="7517510615"
                mail="2020bcs020@sggs.ac.in"
                lin="https://www.linkedin.com/in/janhvi-gadewar-0b9226210"
              />
              <TeamCard
                img={PranavU}
                name="Pranav Umak"
                designation="Media & Workshop Executive"
                phone="9860529951"
                mail="2020bel006@sggs.ac.in"
                lin="https://www.linkedin.com/in/vaishnavi-urmunge-5b0ab4228"
              />
              <TeamCard
                img={VaishnaviU}
                name="Vaishnavi Urmunge"
                designation="Media & Placement Drive Executive"
                phone="9860529951"
                mail="2020bel006@sggs.ac.in"
                lin="https://www.linkedin.com/in/vaishnavi-urmunge-5b0ab4228"
              />
            </div>
          </div>
          <div className="st-team-group">
            <h3>Content Creation Executives</h3>
            <div className="st-team-contents">
              <TeamCard
                img={JanhviG}
                name="Janhvi Gadewar"
                designation="Content Creation & Media Executive"
                phone="7517510615"
                mail="2020bcs020@sggs.ac.in"
                lin="https://www.linkedin.com/in/janhvi-gadewar-0b9226210"
              />
              <TeamCard
                img={RahulW}
                name="Rahul Wankhede"
                designation="Content Creation Executive"
                phone="7387592079"
                mail="2020bit033@sggs.ac.in"
                lin="https://www.linkedin.com/in/rahul-wankhede-030848204"
              />
            </div>
          </div>
          <div className="st-team-group">
            <h3>Workshop & Internship Executives</h3>
            <div className="st-team-contents">
              <TeamCard
                img={OmrajD}
                name="Omraj Deshmukh"
                designation="Workshop & Internship Executive"
                phone="9049616001"
                mail="omrajdeshmukh001@gmail.com"
                lin="https://www.linkedin.com/in/omraj-deshmukh-03b31b210"
              />
              <TeamCard
                img={PranavU}
                name="Pranav Umak"
                designation="Workshop & Media Executive"
                phone="9860529951"
                mail="2020bel006@sggs.ac.in"
                lin="https://www.linkedin.com/in/vaishnavi-urmunge-5b0ab4228"
              />
              <TeamCard
                img={ShamliK}
                name="Shamli Kayastha"
                designation="Workshop & Internship Executive"
                phone="9637294820"
                mail="2020bcs042@sggs.ac.in"
                lin="https://www.linkedin.com/in/shamli-kayastha-149002217"
              />
            </div>
          </div>
          <div className="st-team-group st-team-2x">
            <h3>Departmental Coordinators</h3>
            <div className="st-team-contents">
              <TeamCard
                img={AniketB}
                name="Aniket Bokade"
                designation="Departmental Coordinator (IT)"
                phone="9404745344"
                mail="2020bit022@sggs.ac.in"
                lin="https://www.linkedin.com/in/bokade-aniket-ganesh-708b6a233"
              />
              <TeamCard
                img={AryanB}
                name="Aryan Bhadoriya"
                designation="Departmental Coordinator (Electrical)"
                phone="9913167579"
                mail="2020bel032@sggs.ac.in"
                lin="https://www.linkedin.com/in/bhadoriya-aryan-singh-16b765217"
              />
              <TeamCard
                img={MallinathH}
                name="Mallinath Holkar"
                designation="Departmental Coordinator (Textile)"
                phone="9130877090"
                mail="2020btt010@sggs.ac.in"
                lin="https://www.linkedin.com/in/mallinath-holkar-7901ab179"
              />
              <TeamCard
                img={PratikB}
                name="Pratik Bramhapurkar"
                designation="Departmental Coordinator (Production)"
                phone="7588795608"
                mail="pratikbramhapurkar08@gmail.com"
                lin="https://www.linkedin.com/in/pratik-bramhapurkar-7a44a622b"
              />
              <TeamCard
                img={SandeshB}
                name="Sandesh Bacchewar"
                designation="Departmental Coordinator (Instrumentation)"
                phone="8080403581"
                mail="2020bin024@sggs.ac.in"
                lin="https://www.linkedin.com/in/sandesh-bacchewar-137490201"
              />
              <TeamCard
                img={SanskrutiJ}
                name="Sanskruti Jadhav"
                designation="Departmental Coordinator (EXTC)"
                phone="7559438889"
                mail="2020bec021@sggs.ac.in"
                lin="https://www.linkedin.com/in/sanskruti-jadhav-38267121a"
              />
              <TeamCard
                img={SwapnaliN}
                name="Swapnali Nikam"
                designation="Departmental Coordinator (Civil)"
                phone="7414982096"
                mail="2020bce059@sggs.ac.in"
                lin="https://www.linkedin.com/in/swapnali-nikam-22941a243"
              />
              <TeamCard
                img={VyankateshK}
                name="Vyankatesh Kamlu"
                designation="Departmental Coordinator (Mechanical)"
                phone="8308338233"
                mail="2021bme504@sggs.ac.in"
                lin="https://www.linkedin.com/in/vyankatesh-kamlu-92b500211"
              />
              <TeamCard
                img={YashK}
                name="Yash Kondewar"
                designation="Departmental Coordinator (CSE)"
                phone="8459556421"
                mail="2020bcs070@sggs.ac.in"
                lin="https://www.linkedin.com/in/kondewaryash/"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
