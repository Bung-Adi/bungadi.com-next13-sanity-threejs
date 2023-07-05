const mobile = '/assets/mobile.png'
const backend = '/assets/backend.png'
const creator = '/assets/creator.png'
const web = '/assets/web.png'
const javascript = '/assets/tech/javascript.png'
const typescript = '/assets/tech/typescript.png'
const html = '/assets/tech/html.png'
const css = '/assets/tech/css.png'
const reactjs = '/assets/tech/reactjs.png'
const redux = '/assets/tech/redux.png'
const tailwind = '/assets/tech/tailwind.png'
const nodejs = '/assets/tech/nodejs.png'
const mongodb = '/assets/tech/mongodb.png'
const git = '/assets/tech/git.png'
const figma = '/assets/tech/figma.png'
const docker = '/assets/tech/docker.png'
const kodingnext = '/assets/company/Kodingnext.png'
const blank = '/assets/company/blank.png'
const bawp = '/assets/ba-wp.png'
const baone = '/assets/ba-one.png'
const tenzies = '/assets/tenzies.png'
const threejs = '/assets/tech/threejs.svg'

export const navLinks = [
  // {
  //   id: "home",
  //   title: "Home",
  //   link: "./",
  // },
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "blog",
    title: "Blog",
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
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Designer",
    icon: creator,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Designer Intern",
    company_name: "DNAstudio.web.id",
    icon: blank,
    iconBg: "#383E56",
    date: "August 2016 - July 2017",
    points: [
      "After I clear my course here. I help them in many jobs.",
      "Like doing meetings and briefi ng with clients.",
      "Help staff there with designing the website and training students there",
    ],
  },
  {
    title: "Web Designer",
    company_name: "Freelance",
    icon: blank,
    iconBg: "#383E56",
    date: "December 2020 - Present",
    points: [
      "In general, what I do is web design.",
      "But I actually do graphic design, logo design, printing design, andpresentation design too.",
      "I successfully build good relationships with some small businesses and content creators.",
      "My design process depends on the timeline is.",
    ],
  },
  {
    title: "Advance Coding Teacher (PT)",
    company_name: "Koding next",
    icon: kodingnext,
    iconBg: "#383E56",
    date: "August 2022 - June 2023",
    points: [
      "My job there is to teach coding for kids in class 1-3 grade schooler.",
      "And also early teenager betwen 12 - 17 Junior Hight to Senior Hight",
      "What I teach is 2d games with Scratch, Tynker, some basic Python, and some basic HTML - CSS too",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "bungadi theme wordpress 20xx",
    description:
      "this was the wordpress theme my website used in (I forgot when was it's created) last ting I know in early 2023 I am not use it again",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "wordpress",
        color: "green-text-gradient",
      },
      {
        name: "custom-theme",
        color: "pink-text-gradient",
      },
    ],
    image: bawp,
    source_code_link: "https://github.com/Bung-Adi/bungadi-theme-wordpress-20xx",
  },
  {
    name: "My first react website",
    description:
      "this is my first react headless wordpress cms that's was ever used in this domain",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "wordpress",
        color: "pink-text-gradient",
      },
    ],
    image: baone,
    source_code_link: "https://github.com/Bung-Adi/bungadi-front-end-2022",
  },
  {
    name: "Tenzies Game React",
    description:
      "Simple project but quite use logical thinking. It was a project for my learning with some customization from the original example",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "logic",
        color: "green-text-gradient",
      },
    ],
    image: tenzies,
    source_code_link: "https://github.com/Bung-Adi/Tenzies-Game-React",
  },
];

export { services, technologies, experiences, testimonials, projects };
