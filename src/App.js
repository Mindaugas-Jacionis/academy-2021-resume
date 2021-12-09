import React from "react";

import Separator from "./components/separator";
import Header from "./components/header";
import Pill from "./components/pill";
import ContentBox from "./components/content-box";
import SocialsList from "./components/socials-list";
import Experience from "./components/experience";
import ContactBlock from "./components/contact-block";

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
          <ContentBox className="flex-1" title="Links">
            <SocialsList
              items={[
                {
                  img: linkedin,
                  text: "Linkedin/UserName",
                  url: "https://linkedin.com/",
                  alt: "linkedin logo",
                },
                {
                  img: twitter,
                  text: "@MJacionis",
                  url: "https://twitter.com/mjacionis",
                  alt: "twitter logo",
                },
                {
                  img: github,
                  text: "mindaugas-jacionis",
                  url: "https://github.com/mindaugas-jacionis",
                  alt: "github logo",
                },
                { img: blog, text: "My Blog", url: "https://dev.to/", alt: "dev.to logo" },
              ]}
            />
          </ContentBox>
          <ContentBox className="flex-2" title="About Me">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
              Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse
              non augue egestas, dapibus justo et, lobortis ex. Vestibulum vitae mattis diam.
              Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus justo
              et, lobortis ex.
            </p>
          </ContentBox>
        </section>
        <section className="section">
          <ContentBox className="flex-1" title="Education">
            {[
              { name: "School One", period: "2003 - 2015", degree: "BA" },
              { name: "School Two", period: "2017 - 2021", degree: "MBA" },
            ].map(({ name, period, degree }, i, arr) => (
              <React.Fragment key={i}>
                <div className="school-info">
                  <p>{name}</p>
                  <p>{period}</p>
                  <p>{degree}</p>
                </div>
                {arr.length - 1 !== i && <Separator isShort />}
              </React.Fragment>
            ))}
          </ContentBox>
          <div className="d-flex flex-2">
            <ContentBox title="Personal Skills" className="flex-1 pills-box">
              <Pill color="green">Teamwork</Pill>
              <Pill color="yellow">Communication</Pill>
              <Pill color="red">Organization</Pill>
            </ContentBox>
            <ContentBox className="flex-1 pills-box" title="Technical Skills">
              <Pill color="green">HTML</Pill>
              <Pill color="yellow">CSS</Pill>
              <Pill color="green">JavaScript</Pill>
            </ContentBox>
          </div>
        </section>
        <section className="section">
          <ContentBox className="flex-1" title="Experience">
            <div className="content-box__content job-experience">
              {[
                {
                  company: "Shpotify",
                  title: "Good Person",
                  period: "2020 - 2025",
                  achievements: [
                    "Listened to whole DB of records",
                    "Make logo",
                    "Increase sales with use of A/B tests",
                  ],
                  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
                },
                {
                  company: "Shpotify",
                  title: "Very Good Person",
                  period: "2025 - 2030",
                  achievements: [
                    "Listened to whole DB of records",
                    "Make logo",
                    "Increase sales with use of A/B tests",
                  ],
                  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
                },
                {
                  company: "Shpotify",
                  title: "Very Best Person",
                  period: "2030 - present",
                  achievements: [
                    "Listened to whole DB of records",
                    "Make logo",
                    "Increase sales with use of A/B tests",
                  ],
                  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
                },
              ].map(({ company, title, period, achievements, body }, i) => (
                <Experience
                  key={i}
                  company={company}
                  title={title}
                  period={period}
                  achievements={achievements}
                >
                  {body}
                </Experience>
              ))}
            </div>
          </ContentBox>
        </section>
      </main>
      <footer className="footer">
        <Separator />
        <div className="contacts">
          {[
            { title: "Address", content: ["Some st. 59", "Vilnius, Narnia"] },
            {
              title: "Contact",
              content: [
                { href: "tel:+37060000333", text: "+37060000333" },
                { href: "email@test.dev", text: "email@test.dev" },
              ],
            },
            {
              title: "Social",
              content: [
                { href: "https://linkedin.com/", text: "Linkedin/mindaugas" },
                { href: "https://twitter.com/mjacionis", text: "Twitter/@MJacionis" },
              ],
            },
          ].map((data, i) => (
            <ContactBlock key={i} {...data} />
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
