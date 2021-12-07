import Separator from "./components/separator";
import Header from "./components/header";

import linkedin from "./images/linkedin-logo.png";
import twitter from "./images/twitter-logo.png";
import github from "./images/github-logo.png";
import blog from "./images/dev-to-logo.png";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <section className="section">
          <div className="content-box flex-1">
            <h3 className="content-box__title">Links</h3>
            <Separator isFancy />
            <div className="content-box__content">
              <ul className="social-list">
                <li className="social-list__item">
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkeding logo" />
                    <p>Linkedin/UserName</p>
                  </a>
                </li>
                <li className="social-list__item">
                  <a href="https://twitter.com/mjacionis" target="_blank" rel="noreferrer">
                    <img src={twitter} alt="twitter logo" />
                    <p>@MJacionis</p>
                  </a>
                </li>
                <li className="social-list__item">
                  <a href="https://github.com/mindaugas-jacionis" target="_blank" rel="noreferrer">
                    <img src={github} alt="github logo" />
                    <p>mindaugas-jacionis</p>
                  </a>
                </li>
                <li className="social-list__item">
                  <a href="https://dev.to/" target="_blank" rel="noreferrer">
                    <img src={blog} alt="dev.to logo" />
                    <p>dev.to blog</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="content-box flex-2">
            <h3 className="content-box__title">About Me</h3>
            <Separator isFancy />
            <div className="content-box__content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
                Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse
                non augue egestas, dapibus justo et, lobortis ex. Vestibulum vitae mattis diam.
                Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus
                justo et, lobortis ex.
              </p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="content-box flex-1">
            <h3 className="content-box__title">Links</h3>
            <Separator isFancy />
            <div className="content-box__content">
              <div className="school-info">
                <p>School Name</p>
                <p>2003 - 2015</p>
                <p>Some Diploma</p>
              </div>
              <Separator isShort />
              <div className="school-info">
                <p>School Name</p>
                <p>2003 - 2015</p>
                <p>Some Diploma</p>
              </div>
            </div>
          </div>
          <div className="content-box flex-1 pills-box">
            <h3 className="content-box__title">Personal Skills</h3>
            <Separator isFancy />
            <div className="content-box__content d-inline-flex flex-column">
              <span className="pill pill--green">Teamwork</span>
              <span className="pill pill--yellow">Communication</span>
              <span className="pill pill--red">Organization</span>
            </div>
          </div>
          <div className="content-box flex-1 pills-box">
            <h3 className="content-box__title">Technical Skills</h3>
            <Separator isFancy />
            <div className="content-box__content d-inline-flex flex-column">
              <span className="pill pill--green">HTML</span>
              <span className="pill pill--yellow">CSS</span>
              <span className="pill pill--green">JavaScript</span>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="content-box flex-1">
            <h3 className="content-box__title">Links</h3>
            <Separator isFancy />
            <div className="content-box__content job-experience">
              <div className="experience">
                <div className="experience__meta">
                  <p>Wizard</p>
                  <p>Spotify</p>
                  <p>2025 - present</p>
                </div>
                <p className="experience__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
                  Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia.
                  Suspendisse non augue.
                </p>
                <ul className="experience__achievments">
                  <li>Listened to whole DB of records</li>
                  <li>Make logo</li>
                  <li>Increase sales with use of A/B tests</li>
                </ul>
              </div>
              <div className="experience">
                <div className="experience__meta">
                  <p>Wizard</p>
                  <p>Spotify</p>
                  <p>2025 - present</p>
                </div>
                <p className="experience__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
                  Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia.
                  Suspendisse non augue.
                </p>
                <ul className="experience__achievments">
                  <li>Listened to whole DB of records</li>
                  <li>Make logo</li>
                  <li>Increase sales with use of A/B tests</li>
                </ul>
              </div>
              <div className="experience">
                <div className="experience__meta">
                  <p>Wizard</p>
                  <p>Spotify</p>
                  <p>2025 - present</p>
                </div>
                <p className="experience__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
                  Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia.
                  Suspendisse non augue.
                </p>
                <ul className="experience__achievments">
                  <li>Listened to whole DB of records</li>
                  <li>Make logo</li>
                  <li>Increase sales with use of A/B tests</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <Separator />
        <div className="contacts">
          <div className="contacts__item">
            <h3 className="contacts__item-headline">Address</h3>
            <p>Some st. 59,</p>
            <p>Vilnius, Narnia</p>
          </div>
          <div className="contacts__item">
            <h3 className="contacts__item-headline">Contact</h3>
            <a className="link" href="tel:+37060000333">
              +37060000333
            </a>
            <a className="link" href="mailto:email@test.dev">
              email@test.dev
            </a>
          </div>
          <div className="contacts__item">
            <h3 className="contacts__item-headline">Social</h3>
            <a className="link" href="https://linkedin.com/" target="_blank" rel="noreferrer">
              Linkedin/mindaugas
            </a>
            <a
              className="link"
              href="https://twitter.com/mjacionis"
              target="_blank"
              rel="noreferrer"
            >
              Twitter/@MJacionis
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
