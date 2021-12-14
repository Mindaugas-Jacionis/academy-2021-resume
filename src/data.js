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
      title: "About Me",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et, lobortis ex. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et, lobortis ex.",
    },
    education: {
      title: "Eductation",
      schools: [
        { name: "School One", period: "2003 - 2015", degree: "BA" },
        { name: "School Two", period: "2017 - 2021", degree: "MBA" },
      ],
    },
    personalSkills: {
      title: "Personal Skills",
      skills: [
        { name: "Teamwork", level: "green" },
        { name: "Communication", level: "yellow" },
        { name: "Organization", level: "red" },
      ],
    },
    techSkills: {
      title: "Technical Skills",
      skills: [
        { name: "HTML", level: "green" },
        { name: "CSS", level: "yellow" },
        { name: "JavaScript", level: "green" },
      ],
    },
    experience: {
      title: "Experience",
      jobs: [
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
      ],
    },
    contacts: [
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
    ],
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
    education: {
      title: "Išsilavinimas",
      schools: [
        { name: "Mokykla vienas", period: "2003 - 2015", degree: "Bakalauras" },
        { name: "Mokykla du", period: "2017 - 2021", degree: "Magistras" },
      ],
    },
    personalSkills: {
      title: "Asmenybiniai Įgudžiai",
      skills: [
        { name: "Darbas Komandoje", level: "green" },
        { name: "Komunikacija", level: "yellow" },
        { name: "Organizavimas", level: "red" },
      ],
    },
    techSkills: {
      title: "Techniniai Įgudžiai",
      skills: [
        { name: "HTML", level: "green" },
        { name: "CSS", level: "yellow" },
        { name: "JavaScript", level: "green" },
      ],
    },
    experience: {
      title: "Patirtis",
      jobs: [
        {
          company: "Shpotify",
          title: "Geras Darbuotojas",
          period: "2020 - 2025",
          achievements: [
            "Išklausiau visą muzikos įrašų duombazę",
            "Sukūriau logotipą",
            "Padidinau pardavimų apimtis pasitelkdamas A/B testavimą",
          ],
          body: "Candy canes chocolate cake topping jujubes sweet roll cookie apple pie muffin sesame snaps. Liquorice marzipan gingerbread gingerbread lemon drops. Sesame snaps chocolate cake topping macaroon biscuit pastry. Donut muffin dragée croissant pastry chocolate bar dragée.",
        },
        {
          company: "Shpotify",
          title: "Labai Geras Darbuotojas",
          period: "2025 - 2030",
          achievements: [
            "Išklausiau visą muzikos įrašų duombazę",
            "Sukūriau logotipą",
            "Padidinau pardavimų apimtis pasitelkdamas A/B testavimą",
          ],
          body: "Gummies cheesecake gummies chocolate cake shortbread jujubes cake cheesecake chupa chups. Croissant biscuit toffee chocolate cake jelly beans pudding jujubes dragée sugar plum. Jelly toffee icing chocolate cake cake cupcake macaroon candy canes chupa chups. Soufflé topping bear claw cotton candy icing dragée.",
        },
        {
          company: "Shpotify",
          title: "Pats Geriausias Darbuotojas",
          period: "2030 - present",
          achievements: [
            "Išklausiau visą muzikos įrašų duombazę",
            "Sukūriau logotipą",
            "Padidinau pardavimų apimtis pasitelkdamas A/B testavimą",
          ],
          body: "Donut bonbon halvah chocolate gummi bears bear claw liquorice brownie. Toffee icing ice cream bonbon sweet. Gummies muffin croissant gingerbread chocolate cake. Halvah dessert toffee donut caramels.",
        },
      ],
    },
    contacts: [
      { title: "Adresas", content: ["Some st. 59", "Vilnius, Narnia"] },
      {
        title: "Kontaktai",
        content: [
          { href: "tel:+37060000333", text: "+37060000333" },
          { href: "email@test.dev", text: "email@test.dev" },
        ],
      },
      {
        title: "Socialiniai Tinklai",
        content: [
          { href: "https://linkedin.com/", text: "Linkedin/mindaugas" },
          { href: "https://twitter.com/mjacionis", text: "Twitter/@MJacionis" },
        ],
      },
    ],
  },
};

export default data;
