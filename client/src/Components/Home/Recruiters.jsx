import React from "react";
import { Container } from "react-bootstrap";
import Accenture from "../../img/tnpsite-logo/new/accenture.png";
import AccoliteDigital from "../../img/tnpsite-logo/new/accolite-digital.png";
import AdaniGroup from "../../img/tnpsite-logo/new/adani-group.png";
import AkerSolutions from "../../img/tnpsite-logo/new/aker-solutions.png";
import Altimetrik from "../../img/tnpsite-logo/new/altimetrik.png";
import AnalyzerCAE from "../../img/tnpsite-logo/new/analyzer-cae.png";
import BanswaraSyntex from "../../img/tnpsite-logo/new/banswara-syntex.png";
import Bosch from "../../img/tnpsite-logo/new/bosch.png";
import BurnsMcDonnell from "../../img/tnpsite-logo/new/burns-and-mcdonnell.png";
import Byjus from "../../img/tnpsite-logo/new/byjus.png";
import Capgemini from "../../img/tnpsite-logo/new/capgemini.png";
import CCTech from "../../img/tnpsite-logo/new/cctech.png";
import Centiro from "../../img/tnpsite-logo/new/centiro.png";
import Coditas from "../../img/tnpsite-logo/new/coditas.png";
import Cognizant from "../../img/tnpsite-logo/new/cognizant.png";
import Cognologix from "../../img/tnpsite-logo/new/cognologix.png";
import ConsultAdd from "../../img/tnpsite-logo/new/consultadd.png";
import CSSCorp from "../../img/tnpsite-logo/new/css-corp.png";
import Dassault from "../../img/tnpsite-logo/new/dassault.png";
import Deloitte from "../../img/tnpsite-logo/new/deloitte.png";
import Emerson from "../../img/tnpsite-logo/new/emerson.png";
import Emertxe from "../../img/tnpsite-logo/new/emertxe.png";
import EPAM from "../../img/tnpsite-logo/new/epam.png";
import Eratronics from "../../img/tnpsite-logo/new/eratronics.png";
import Euronet from "../../img/tnpsite-logo/new/euronet.png";
import Faurecia from "../../img/tnpsite-logo/new/faurecia.png";
import Fox from "../../img/tnpsite-logo/new/fox.jpg";
import GMP from "../../img/tnpsite-logo/new/get-my-parking.png";
import GoldmanSachs from "../../img/tnpsite-logo/new/goldman-sachs.png";
import Hexaware from "../../img/tnpsite-logo/new/hexaware.png";
import Iauro from "../../img/tnpsite-logo/new/iauro.png";
import Inexture from "../../img/tnpsite-logo/new/inexture.png";
import Infosys from "../../img/tnpsite-logo/new/infosys.png";
import Intellipaat from "../../img/tnpsite-logo/new/intellipaat.png";
import JohnsonControl from "../../img/tnpsite-logo/new/johnson-controls.png";
import Kifs from "../../img/tnpsite-logo/new/kifs-trade.png";
import KnorrBremse from "../../img/tnpsite-logo/new/knorr-bremse.png";
import Lennox from "../../img/tnpsite-logo/new/lennox-india.png";
import LnT from "../../img/tnpsite-logo/new/lnt-technologies.jpg";
import LTI from "../../img/tnpsite-logo/new/lti.svg";
import MountBlue from "../../img/tnpsite-logo/new/mountblue.png";
import MindBowser from "../../img/tnpsite-logo/new/mindbowser.png";
import Mindstix from "../../img/tnpsite-logo/new/mindstix.png";
import Mindtree from "../../img/tnpsite-logo/new/mindtree.png";
import Muni from "../../img/tnpsite-logo/new/muni-edutech.png";
import NCircle from "../../img/tnpsite-logo/new/n-circle.jpg";
import Neilsoft from "../../img/tnpsite-logo/new/neilsoft.png";
import NEML from "../../img/tnpsite-logo/new/neml.png";
import Netcracker from "../../img/tnpsite-logo/new/netcracker.png";
import NSEIT from "../../img/tnpsite-logo/new/nseit.png";
import Persistent from "../../img/tnpsite-logo/new/persistent.png";
import PLM from "../../img/tnpsite-logo/new/plm-nordic.webp";
import Praj from "../../img/tnpsite-logo/new/praj.png";
import Quest from "../../img/tnpsite-logo/new/quest-global.webp";
import Raja from "../../img/tnpsite-logo/new/raja.png";
import Reliance from "../../img/tnpsite-logo/new/reliance.png";
import ResearchWire from "../../img/tnpsite-logo/new/researchwire.webp";
import RSJ from "../../img/tnpsite-logo/new/rsj-inspection.webp";
import Sarvaha from "../../img/tnpsite-logo/new/sarvaha.webp";
import Selldo from "../../img/tnpsite-logo/new/selldotdo.png";
import Siemens from "../../img/tnpsite-logo/new/siemens.png";
import SquareYard from "../../img/tnpsite-logo/new/square-yards.webp";
import TCS from "../../img/tnpsite-logo/new/tcs.png";
import TechMahindra from "../../img/tnpsite-logo/new/tech-mahindra.png";
import Thermax from "../../img/tnpsite-logo/new/thermax.png";
import TIAA from "../../img/tnpsite-logo/new/tiaa.png";
import TietoEvry from "../../img/tnpsite-logo/new/tieto-evry.png";
import Welspun from "../../img/tnpsite-logo/new/welspun.png";
import Wipro from "../../img/tnpsite-logo/new/wipro.jpg";
import Zensar from "../../img/tnpsite-logo/new/zensar.png";

import { Image, Col, Row } from "react-bootstrap";

export default function Recruiters() {
  return (
    <>
      <section id="image" className="image">
        <h3>Recruiters</h3>
        <Container className="rec-scroll" fluid>
          <Row>
            <Col lg="2" md="3">
              <Image className="photo" src={Accenture} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={AccoliteDigital} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={AdaniGroup} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={AkerSolutions} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Altimetrik} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={AnalyzerCAE} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={BanswaraSyntex} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Bosch} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={BurnsMcDonnell} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Byjus} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Capgemini} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={CCTech} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Centiro} />
            </Col>
            <Col lg="2" md="3">
              <Image
                className="photo"
                style={{ backgroundColor: "#000" }}
                src={Coditas}
              />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Cognizant} />
            </Col>
            <Col lg="2" md="3">
              <Image
                className="photo"
                style={{ backgroundColor: "#b8501b", padding: "8px" }}
                src={Cognologix}
              />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={ConsultAdd} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={CSSCorp} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Dassault} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Deloitte} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Emerson} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Emertxe} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={EPAM} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Eratronics} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Euronet} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Faurecia} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Fox} />
            </Col>
            <Col lg="2" md="3">
              <Image
                className="photo"
                src={GMP}
                style={{ backgroundColor: "#000", padding: "8px" }}
              />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={GoldmanSachs} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Hexaware} />
            </Col>
            <Col lg="2" md="3">
              <Image
                className="photo"
                src={Iauro}
                style={{ backgroundColor: "#000", padding: "8px" }}
              />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Inexture} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Infosys} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Intellipaat} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={JohnsonControl} />
            </Col>
            <Col lg="2" md="3">
              <Image
                className="photo"
                src={Kifs}
                style={{ backgroundColor: "#000", padding: "8px" }}
              />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={KnorrBremse} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Lennox} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={LnT} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={LTI} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={MountBlue} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={MindBowser} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Mindstix} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Mindtree} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Muni} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={NCircle} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Neilsoft} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={NEML} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Netcracker} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={NSEIT} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Persistent} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={PLM} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Praj} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Quest} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Raja} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Reliance} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={ResearchWire} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={RSJ} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Sarvaha} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Selldo} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Siemens} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={SquareYard} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={TCS} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={TechMahindra} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Thermax} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={TIAA} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={TietoEvry} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Welspun} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Wipro} />
            </Col>
            <Col lg="2" md="3">
              <Image className="photo" src={Zensar} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
