import React from "react";

// import RNJoshi from "../../img/rnjoshi-sir.png";
// import MBKokare from "../../img/kokare-sir.jpeg";
import IGavakhore from "../../img/ishwar-sir.jpg";
import TNPLogo from "../../img/TNP LOGO.png";

import SharvariS from "../../img/team2023_2024/SHARVARI-MILIND-SALODKAR.jpg";
import RoshanV from "../../img/team2023_2024/Roshan-Vishwakarma.jpg";
import Mrunal from "../../img/team2023_2024/_2Mrunal-Yashwant-Dhuware.jpg";
import OmSaiM from "../../img/team2023_2024/OMSAI-SANTOSH-MUTYALWAR.jpg";
import ShreyasH from "../../img/team2023_2024/_2SHREYASH_SUNILRAO_HOLEY.jpeg";
import SharayuM from "../../img/team2023_2024/_2SHARAYU-PURUSHOTTAM-MEGHARE.jpg";
import RuchaP from "../../img/team2023_2024/_2RUCHA-JANARDHAN-PAKWANNE.jpg";
import VaishnaviP from "../../img/team2023_2024/VAISHNAVI-GIRISH-PATIL.jpg";
import ShushilB from "../../img/team2023_2024/SUSHIL-SUBHASH-BHOYBAR.jpg";
import HariomS from "../../img/team2023_2024/_2Hariom-Pravin-Shivhare.jpeg";
import ApoorvM from "../../img/team2023_2024/APOORV-ABHAY-MEHAR.JPG";
import AkashV from "../../img/team2023_2024/AKASH-AMRESH-VISHWAKARMA-(2022BPR501).jpg";
import HarshaC from "../../img/team2023_2024/HARSHA-VIVEKRAO-CHANAKHEKAR.jpg";
import MadanT from "../../img/team2023_2024/_2MADAN-DINESHRAO-TAMBADE.jpg";
import AdityaS from "../../img/team2023_2024/ADITYA-AMBADAS-SAKHARE.jpg";
import SakshiKal from "../../img/team2023_2024/_2SAKSHI-PRAVIN-KALYANKAR.jpg";
import ShraddhaL from "../../img/team2023_2024/SHRADDHA-MOHAN-LOKHANDE.jpg";
import VaishnaviG from "../../img/team2023_2024/_2VAISHNAVI-GANESH-GHUGE.jpg";
import ShrutiW from "../../img/team2023_2024/SHRUTI-SHARAD-WAGH.jpg";
import ChaitanyaK from "../../img/team2023_2024/CHAITANYA-SURENDRA-KULKARNI.jpg";
import SanskrutiU from "../../img/team2023_2024/_2SANSKRUTI-SANJAY-UMARE.jpg";
import AyushT from "../../img/team2023_2024/AYUSH-BHOJRAJ-THOMBARE.jpg";
import SnehalP from "../../img/team2023_2024/_2PAWAR-SNEHAL.jpg";
import SakshiKul from "../../img/team2023_2024/_2SAKSHI-DINESH-KULKARNI.jpg";
import TriveniC from "../../img/team2023_2024/_2TRIVENI-CHANDRAKANT-CHAUDHARI.jpg";

import Hexagons from "../../img/hexagons.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import OldTeams from "./OldTeams/oldTeamsTab";

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
                {props.mail2 ? (
                  <>
                    , <a href={`mailto:${props.mail2}`}>{props.mail2}</a>
                  </>
                ) : (
                  <></>
                )}
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
        {props.mail ? (
          <a href={`mailto:${props.mail}`}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        ) : (
          <></>
        )}
        {/* <a href={`mailto:${props.mail}`}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a> */}
        <a href={props.lin}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default function NewTeam_23_24() {
  return (
    <>
      <div className="head-container">
        <div className="head-bg head-bg-one">
          <img src={Hexagons} alt="" />
        </div>
        <div className="head-bg head-bg-two">
          <img src={Hexagons} alt="" />
        </div>

         {/* button for previous teams */}
         <div style={{ marginTop: "40px" }}>
          <Link to="../"><button className="ui-btn">Previous Teams</button></Link>
        </div>

        <HeadCard
          img={TNPLogo}
          name="Training & Placement Office"
          //designation="Director"
          tel="02462-269181"
          mail="tpo@sggs.ac.in"
          mail2="tnpcell@sggs.ac.in"
        />
        {/* <HeadCard
          img={RNJoshi}
          name="Dr. Ravindra Joshi"
          designation="Dean (Industry Liaison), I/C TPO"
          tel="+91 75884 28778"
          mail="tpo@sggs.ac.in"
        /> */}
        <HeadCard
          img={IGavakhore}
          name="Mr. Ishwar Gavakhore"
          designation="Training & Placement Office Assistant"
          tel="+91 75078 77206"
          mail="tnpcell@sggs.ac.in"
        />
      </div>
      <div className="st-team">
        <h2
          className="text-center team-main-text new-font"
          style={{ marginTop: "20px" }}
        >
          OUR STUDENTS TEAM (23-24)
        </h2>
        <div className="st-team-cont
        ainer">
          <div className="st-team-group st-team-2x">
            <h3>Secretaries</h3>
            <div className="st-team-contents">
              <TeamCard
                img={SharvariS}
                name="Sharvari Milind Salodkar"
                designation="Training & Placement Secretary"
                phone="9421738331"
                mail="2021bit027@sggs.ac.in"
                lin="https://www.linkedin.com/in/sharvari-salodkar-587b611a5"
              />
              <TeamCard
                img={RoshanV}
                name="Roshan Vishwakarma"
                designation="Training & Placement Secretary"
                phone="7219041181"
                mail="2021bcs155@sggs.ac.in"
                lin="https://www.linkedin.com/in/theroshan21."
              />
            </div>
          </div>

          <div className="st-team-group">
            <h3>HR Executives</h3>
            <div className="st-team-contents">
              <TeamCard
                img={Mrunal}
                name="Mrunal Yashwant Dhuware "
                designation="HR Executive"
                phone="9307983723"
                mail="2021bin006@sggs.ac.in"
                lin="https://www.linkedin.com/in/mrunal-dhuware-0a2826250"
              />
              <TeamCard
                img={ShreyasH}
                name="Shreyas Sunilrao Holey "
                designation="HR Executive"
                phone="9834107147"
                mail="shreyasholey108@gmail.com"
                lin="https://www.linkedin.com/in/sakshi-joshi-7a324520b"
              />
              <TeamCard
                img={OmSaiM}
                name="Omsai Mutyalwar"
                designation="HR Executive"
                phone="9067951440"
                mail="2021bcs033@sggs.ac.in"
                lin="https://www.linkedin.com/in/omsai-mutyalwar-5a3089227"
              />
            </div>
          </div>

          <div className="st-team-group">
            <h3>DBMS Executives</h3>
            <div className="st-team-contents">
              <TeamCard
                img={SharayuM}
                name="Sharayu Purushottam Meghare "
                designation="DBMS Executive"
                phone="7410015224"
                mail="2021bcs082@sggs.ac.in"
                lin="https://www.linkedin.com/in/sharayu-meghare-867501261"
              />
              <TeamCard
                img={RuchaP}
                name="Rucha Pakwanne "
                designation="DBMS Executive"
                phone="9823015301"
                mail="2021bcs076@sggs.ac.in"
                lin="https://www.linkedin.com/in/rucha-pakwanne-561a46235"
              />
            </div>
          </div>

          <div className="st-team-group">
            <h3>Placement Drive Executives</h3>
            <div className="st-team-contents">
              <TeamCard
                img={VaishnaviP}
                name="Vaishnavi Girish Patil "
                designation="Placement Drive Executive"
                phone="9403320885"
                mail="2021bcs054@sggs.ac.in"
                lin="https://www.linkedin.com/in/vaishnavi-patil-0ab36a229"
              />
              <TeamCard
                img={ShushilB}
                name="Sushil Subhash Bhoybar"
                designation="Placement Drive Executive"
                phone="9970308955"
                mail="2021bcs073@sggs.ac.in"
                lin="https://www.linkedin.com/in/sushil-bhoybar-59658b257?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXE2WKQVISF2pGArMxiVSAg%3D%3D"
              />
            </div>
          </div>

          <div className="st-team-group">
            <h3>Media & Website Executives</h3>
            <div className="st-team-contents">
              <TeamCard
                img={HariomS}
                name="Hariom Pravin Shivhare"
                designation="Website Executive"
                phone="8767008518"
                mail="2021bit046@sggs.ac.in"
              lin="https://www.linkedin.com/in/hariom-shivhare-a32803290/"
              />
              <TeamCard
                img={ApoorvM}
                name="Apoorv Abhay Mehar "
                designation="Social Media & Website Executive"
                phone="9699150078"
                mail="2021bcs091@sggs.ac.in"
                lin="https://www.linkedin.com/in/apoorv-abhay-mehar-1587a325b"
              />
              <TeamCard
                img={AkashV}
                name="Akash Amresh Vishwakarma "
                designation="Social Media & Website Executive"
                phone="7756991100"
                mail="2022bpr501@sggs.ac.in"
                lin="https://www.linkedin.com/in/akash-vishwakarma-9b59751b7"
              />
            </div>
          </div>

          <div className="st-team-group">
            <h3>Content Creation Executives</h3>
            <div className="st-team-contents">
              <TeamCard
                img={MadanT}
                name="Madan Tambade"
                designation="Content Creation"
                phone="9423701051"
                mail="2021bcs099@sggs.ac.in"
                lin="https://www.linkedin.com/in/madan-tambade-0bb45622b"
              />
            </div>
          </div>

          <div className="st-team-group">
            <h3>Workshop & Internship Executives</h3>
            <div className="st-team-contents">
              <TeamCard
                img={HarshaC}
                name="Harsha Vivek Chanakhekar "
                designation="Workshop & Internship Executive"
                phone="8668843990"
                mail="2021bpr013@sggs.ac.in"
                lin="https://www.linkedin.com/in/harsha-chanakhekar-a992aa25a"
              />
              <TeamCard
                img={AdityaS}
                name="Aditya Ambadas Sakhare"
                designation="Workshop & Internship Executive"
                phone="7350241681"
                mail="2021bit038@sggs.ac.in"
                lin="https://www.linkedin.com/in/aditya-sakhare-27may"
              />
            </div>
          </div>

          <div className="st-team-group st-team-2x">
            <h3>Departmental Coordinators</h3>
            <div className="st-team-contents">
              <TeamCard
                img={SakshiKal}
                name="Sakshi Pravin Kalyankar"
                designation="Departmental Coordinator (CSE)"
                phone="7385775631"
                mail="2021bcs094@sggs.ac.in"
                lin="https://www.linkedin.com/in/sakshi-kalyankar-77a193247"
              />
              <TeamCard
                img={ShraddhaL}
                name="Shraddha Mohan Lokhande"
                designation="Departmental Coordinator (IT)"
                phone="9373129722"
                mail="2021bit041@sggs.ac.in"
                lin="linkedin.com/in/shraddha-lokhande-527827250"
              />
              <TeamCard
                img={VaishnaviG}
                name="Vaishnavi Ganesh Ghuge "
                designation="Departmental Coordinator (EXTC)"
                phone="9075515019"
                mail="2021bec043@sggs.ac.in"
                lin="https://www.linkedin.com/in/vaishnavi-ghuge-1ba617250"
              />
              <TeamCard
                img={ShrutiW}
                name="Shruti Sharad Wagh"
                designation="Departmental Coordinator (Electrical)"
                phone="7588795608"
                mail="shrutiwagh350@gmail.com"
                lin="https://www.linkedin.com/in/shruti-wagh-887617250"
              />
              <TeamCard
                img={ChaitanyaK}
                name="Chaitanya Surendra Kulkarni"
                designation="Departmental Coordinator (Mechanical)"
                phone="8261845309"
                mail="chaitanya.kul6@gmail.com"
                lin="https://www.linkedin.com/in/chaitanya-kulkarni-86987732"
              />
              <TeamCard
                img={SanskrutiU}
                name="Sanskruti Sanjay Umare "
                designation="Departmental Coordinator (Chemical)"
                phone="8855956044"
                mail="sanskrutiumare2003@gmail.com"
                lin="https://www.linkedin.com/in/sanskruti-jadhav-38267121a"
              />
              <TeamCard
                img={AyushT}
                name="Ayush Bhojraj Thombare "
                designation="Departmental Coordinator (Textile)"
                phone="9923250217"
                mail="2022btt501@sggs.ac.in "
                lin="https://www.linkedin.com/in/ayush-thombare-753830277/"
              />
              <TeamCard
                img={SnehalP}
                name="Snehal Shridhar Pawar"
                designation="Departmental Coordinator (Production)"
                phone="7972969464"
                mail="2021bpr009@sggs.ac.in"
                lin="https://www.linkedin.com/in/snehal-pawar-48885a257"
              />
              <TeamCard
                img={TriveniC}
                name="Triveni Chaudhari"
                designation="Departmental Coordinator (Instrumentation)"
                phone="9545869691"
                mail="2021bin030@sggs.ac.in"
                lin=""
              />
              <TeamCard
                img={SakshiKul}
                name="Sakshi Dinesh Kulkarni "
                designation="Departmental Coordinator (Civil)"
                phone="9307810193"
                mail="Kulsakshi2003@gmail.com"
                lin="https://www.linkedin.com/in/sakshi-kulkarni-28743322b"
              />
            </div>
          </div>
        </div>


      </div>
    </>
  );
}
