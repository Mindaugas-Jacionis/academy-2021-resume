import linkedin from "./images/linkedin-logo.png";
import twitter from "./images/twitter-logo.png";
import github from "./images/github-logo.png";
import blog from "./images/dev-to-logo.png";

const data = {
  en: {
    links: {
      title: "Links",
      items: [
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
      ],
    },
    about: {
      title: "Apie Mane",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et, lobortis ex. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et, lobortis ex.",
    },
  },
  lt: {
    links: {
      title: "Nuorodos",
      items: [
        {
          img: linkedin,
          text: "Linkedin/UserName",
          url: "https://linkedin.com/",
          alt: "linkedin logotipas",
        },
        {
          img: twitter,
          text: "@MJacionis",
          url: "https://twitter.com/mjacionis",
          alt: "twitter logotipas",
        },
        {
          img: github,
          text: "mindaugas-jacionis",
          url: "https://github.com/mindaugas-jacionis",
          alt: "github logotipas",
        },
        { img: blog, text: "Asmeninis Blogas", url: "https://dev.to/", alt: "dev.to logotipas" },
      ],
    },
    about: {
      title: "Apie Mane",
      body: "Cupcake ipsum dolor sit amet. Lollipop sweet roll pie sweet ice cream tootsie roll. Sweet bonbon pudding lemon drops dragée. Jelly gummies pastry halvah halvah lemon drops cotton candy. Donut sesame snaps bear claw sweet roll fruitcake lemon drops sweet roll chocolate bar. Candy shortbread tootsie roll candy canes candy canes shortbread.",
    },
  },
};

export default data;
