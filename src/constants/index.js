import {
  mobile,
  backend,
  grafiks,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  chill,
  carrent,
  calculator,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphics Designer",
    icon: grafiks,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Chill Academy",
    icon: chill,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Chill Academy",
    icon: chill,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Chill Academy",
    icon: chill,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Chill Academy",
    icon: chill,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Charles proved me wrong.",
    name: "Pamphile MKP",
    designation: "TRCN",
    company: "Chill Academy",
    image: "https://avatars.githubusercontent.com/u/98436409?v=4",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Charles does.",
    name: "Basit Ali",
    designation: "PKSTN",
    company: "DRC 145",
    image: "https://avatars.githubusercontent.com/u/63063973?v=4",
  },
  {
    testimonial:
      "After Charles optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Gabriel Aghogho",
    designation: "TRCN",
    company: "Ciddi Mutfak",
    image: "https://pbs.twimg.com/media/FqJ8a-CXgAUiUNF.jpg",
  },
];

const projects = [
  {
    name: "Crypto market tracker",
    description:
      "Web-based platform that allows users to fetch data from coinllore crypto API, lists the metrics by coin name and displays additional information when clicked on a coin link.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Charzy-1/React-capstone-project",
    live_demo_link: 'https://66e493a11d296b6c9784521d--leosex.netlify.app/',
  },
  {
    name: "SpaceX-Mission-App",
    description:
      "SpaceX-mission-app is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Charzy-1/SpaceX-Mission-App",
    live_demo_link: 'https://spacexmission-app.netlify.app/',
  },
  {
    name: "Math Wizard",
    description:
      "Math-Wizard is a web app for all lovers of mathematics. It is a Single Page Application (SPA) that allows users to make simple calculations and read a random math-related quotes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: calculator,
    source_code_link: "https://github.com/Charzy-1/Math-wizard-app",
    live_demo_link: 'https://66c72eb234e70410b003a82e--benevolent-alfajores-7f3c32.netlify.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };