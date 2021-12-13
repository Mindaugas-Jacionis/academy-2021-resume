import React, { useState } from "react";

import Separator from "./components/separator";
import Header from "./components/header";
import Pill from "./components/pill";
import ContentBox from "./components/content-box";
import SocialsList from "./components/socials-list";
import Experience from "./components/experience";
import ContactBlock from "./components/contact-block";

import data from "./data";

import "./App.css";

function App() {
  const [language, setLanguage] = useState("en");
  const { links, about } = data[language];

  return (
    <div className="app">
      <Header language={language} setLanguage={setLanguage} />
      <main className="main">
        <section className="section">
          <ContentBox className="flex-1" title={links.title}>
            <SocialsList items={links.items} />
          </ContentBox>
          <ContentBox className="flex-2" title={about.title}>
            <p>{about.body}</p>
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
