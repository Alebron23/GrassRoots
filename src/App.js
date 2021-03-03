import logo from "./img/logo.png";
import maintenance from "./img/maintenance.png";
import design from "./img/design.png";
import irrigation from "./img/irrigation.png";
import Grid from "@material-ui/core/Grid";
import { IKImage } from "imagekitio-react";

import HelmetWrapper from "./HelmutWrapper";
import "./App.css";

const urlEndpoint = "https://ik.imagekit.io/o2fek1q3cpj/";

function App() {
  return (
    <div className="App">
      <HelmetWrapper />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-title">GrassRoots</div>

        <button className="btn-styles App-quote">
          <a href="tel:+1-864-706-9518">Request Quote</a>
        </button>
      </header>
      <div className="App-coverPage" />

      <Grid
        className="App-subsection"
        container
        spacing={2}
        alignItems="center"
      >
        <Grid container item xs={12} md={4}>
          <IKImage
            urlEndpoint={urlEndpoint}
            path="maintenance_6VGPI6gq1f.png"
            transformation={[{ height: 300, width: 400 }]}
            lqip={{ active: true, quality: 20 }}
            loading="lazy"
            alt="Maintenance Pic"
            className="sectionImg"
          />
          <div className="sectionText">
            <h3>Maintenance</h3>
            Need your grass cut? No problem.  Looking for a more manicured and
            tailored approach? We can handle that with contracts and regular
            maintenance schedule. We recommend this as it saves money in the
            long run. 
          </div>
        </Grid>
        <Grid container item xs={12} md={4}>
          <IKImage
            urlEndpoint={urlEndpoint}
            path="design_J1hCXXegWa.png"
            transformation={[{ height: 300, width: 400 }]}
            lqip={{ active: true, quality: 20 }}
            loading="lazy"
            alt="Design Pic"
            className="sectionImg"
          />
          <div className="sectionText">
            <h3>Design</h3>
            We can help design your landscapes and plan them out the way you
            imagine them to be. Good planning means great savings plus beautiful
            landscapes.
          </div>
        </Grid>
        <Grid container item xs={12} md={4}>
          <IKImage
            urlEndpoint={urlEndpoint}
            path="irrigation_Jqoy2L3G8.png"
            transformation={[{ height: 300, width: 400 }]}
            lqip={{ active: true, quality: 20 }}
            loading="lazy"
            alt="Installation Pic"
            className="sectionImg"
          />
          <div className="sectionText">
            <h3>Installation</h3>
            We install a variety of products. Whether it's irrigation, pumps,
            landscape lighting or drains we provide a variety of services. 
          </div>
        </Grid>
      </Grid>

      <button className="btn-styles contact-btn">
        <a href="tel:+1-864-706-9518">Contact Us</a>
      </button>

      <h1>Services</h1>
      <Grid className="services" container>
        <Grid item container xs={12} md={6}>
          <ul className="servicesList firstList">
            <li>Grass Cutting</li>
            <li>Irrigation</li>
            <li>Landscape Lighting</li>
            <li>Pavers</li>
            <li>Grading</li>
            <li>Walkways</li>
            <li>French Drain</li>
          </ul>
        </Grid>
        <Grid item container xs={12} md={6}>
          <ul className="servicesList">
            <li>Sprinkler Installation/Repair</li>
            <li>Pump Installation</li>
            <li>Sod</li>
            <li>Mulch</li>
            <li>Patios</li>
            <li>Tree Removal</li>
            <li>Landscape Design</li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
