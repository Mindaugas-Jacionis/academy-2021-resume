import React from "react";

import Separator from "./components/separator";
import Header from "./components/header";
import Pill from "./components/pill";
import ContentBox from "./components/content-box";
import SocialsList from "./components/socials-list";
import Experience from "./components/experience";
import ContactBlock from "./components/contact-block";
import Timer from "./components/Timer";
import ErrorBoundary from "./components/ErrorBoundary";

import data from "./data";

import "./App.css";

class App extends React.Component {
  state = {
    language: "en",
  };

  setLanguage = (language) => {
    this.setState({ language });
  };

  // UNSAFE_componentWillMount() {
  //   console.log("componentWillMount");
  // }

  // async componentDidMount() {
  //   console.log("componentDidMount");
  //   // this.setLanguage("lt");
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate", {
  //     nextProps,
  //     nextState,
  //     currentState: this.state,
  //     currentProps: this.props,
  //   });

  //   // We don't yet support es language, so we prevent re-render
  //   return nextState.language !== "es";
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log("componentWillUpdate", {
  //     nextProps,
  //     nextState,
  //     currentState: this.state,
  //     currentProps: this.props,
  //   });
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate", {
  //     state: this.state,
  //     props: this.props,
  //     prevProps,
  //     prevState,
  //   });

  //   return { scrollTo: Number.parseInt(Math.random() * 100, 10) };
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log("componentDidUpdate", {
  //     state: this.state,
  //     props: this.props,
  //     prevProps,
  //     prevState,
  //     snapshot,
  //   });

  //   // to avoid infinite loops, use this.setState conditionally
  //   // NEVER use this.setState without condition
  //   // if (this.state.language !== "en") {
  //   //   this.setState({ language: "en" });
  //   // }

  //   if (snapshot?.scrollTo) {
  //     window.scrollTo(0, snapshot.scrollTo);
  //   }
  // }

  render() {
    // console.log("render");
    const { language } = this.state;
    const { links, about, education, personalSkills, techSkills, experience, contacts } =
      data[language === "es" ? "en" : language];

    return (
      <div className="app">
        <ErrorBoundary fallback={<p>Headache :(</p>}>
          <Header language={language} setLanguage={this.setLanguage} />
        </ErrorBoundary>
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
            <ContentBox className="flex-1" title={education.title}>
              {education.schools.map(({ name, period, degree }, i, arr) => (
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
              <ContentBox title={personalSkills.title} className="flex-1 pills-box">
                {personalSkills.skills.map(({ name, level }, i) => (
                  <Pill key={i} color={level}>
                    {name}
                  </Pill>
                ))}
              </ContentBox>
              <ContentBox className="flex-1 pills-box" title={techSkills.title}>
                {techSkills.skills.map(({ name, level }, i) => (
                  <Pill key={i} color={level}>
                    {name}
                  </Pill>
                ))}
              </ContentBox>
            </div>
          </section>
          <section className="section">
            <ContentBox className="flex-1" title={experience.title}>
              <div className="content-box__content job-experience">
                {experience.jobs.map(({ company, title, period, achievements, body }, i) => (
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
          {language === "en" && <Timer />}
          <div className="contacts">
            {contacts.map((data, i) => (
              <ContactBlock key={i} {...data} />
            ))}
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
