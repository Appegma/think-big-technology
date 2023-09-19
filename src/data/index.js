import {
  BiLogoAngular,
  BiLogoCss3,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTypescript,
  BiLogoVuejs,
} from "react-icons/bi";
import { AiFillFacebook, AiOutlineAmazon } from "react-icons/ai";
import { FaGoogle, FaAddressBook } from "react-icons/fa";
import { PiProjectorScreenChartBold } from "react-icons/pi";
import javascriptlogo from "../assets/languagesLogo/JavaScript.png";
import reactlogo from "../assets/languagesLogo/react.png";
import htmllogo from "../assets/languagesLogo/html.png";
import csslogo from "../assets/languagesLogo/css.png";
import angularlogo from "../assets/languagesLogo/angular.png";
import vuelogo from "../assets/languagesLogo/vue.png";
import typescriptlogo from "../assets/languagesLogo/typescript.png";
import nodelogo from "../assets/languagesLogo/node.png";
import githublogo from "../assets/languagesLogo/github.png";
import reduxlogo from "../assets/languagesLogo/redux.png";
import background1 from "../assets/backgroundImage/background1.jpg";
import background2 from "../assets/backgroundImage/background2.jpg";
import background3 from "../assets/backgroundImage/background3.jpg";

export const menuItems = [
  {
    id: "main",
    logo: (
      <p>
        T<span className="boldBlueText">.</span>
      </p>
    ),
    title: "Home",
  },
  {
    id: "projects",
    logo: <PiProjectorScreenChartBold />,
    title: "Projects",
  },
  {
    id: "google",
    logo: <FaGoogle />,
    title: "Google",
  },
  {
    id: "facebook",
    logo: <AiFillFacebook />,
    title: "Facebook",
  },
  {
    id: "amazon",
    logo: <AiOutlineAmazon />,
    title: "Amazon",
  },
  {
    id: "contact",
    logo: <FaAddressBook />,
    title: "Contact",
  },
];

export const techStackLogo = [
  {
    id: "javascript",
    image: javascriptlogo,
    title: "Javascript",
    descp: "this is the description",
  },
  {
    id: "react",
    image: reactlogo,
    title: "React",
    descp: "this is the description",
  },
  {
    id: "html",
    image: htmllogo,
    title: "HTML",
    descp: "this is the description",
  },
  {
    id: "css",
    image: csslogo,
    title: "CSS",
    descp: "this is the description",
  },
  {
    id: "angular",
    image: angularlogo,
    title: "Angular",
    descp: "this is the description",
  },
  {
    id: "vue",
    image: vuelogo,
    title: "Vue",
    descp: "this is the description",
  },
  {
    id: "typescript",
    image: typescriptlogo,
    title: "Typescript",
    descp: "this is the description",
  },
  {
    id: "node",
    image: nodelogo,
    title: "Node",
    descp: "this is the description",
  },
  {
    id: "github",
    image: githublogo,
    title: "Github",
    descp: "this is the description",
  },
  {
    id: "redux",
    image: reduxlogo,
    title: "Redux",
    descp: "this is the description",
  },
];

export const techStack = [
  {
    id: "javascript",
    logo: <BiLogoJavascript />,
    title: "Javascript",
  },
  {
    id: "react",
    logo: <BiLogoReact />,
    title: "React",
  },
  {
    id: "html",
    logo: <BiLogoHtml5 />,
    title: "HTML",
  },
  {
    id: "css",
    logo: <BiLogoCss3 />,
    title: "CSS",
  },
  {
    id: "angular",
    logo: <BiLogoAngular />,
    title: "Angular",
  },
  {
    id: "vue",
    logo: <BiLogoVuejs />,
    title: "Vue",
  },
  {
    id: "typescript",
    logo: <BiLogoTypescript />,
    title: "Typescript",
  },
  {
    id: "node",
    logo: <BiLogoNodejs />,
    title: "Node",
  },
  {
    id: "github",
    logo: <BiLogoGithub />,
    title: "Github",
  },
  {
    id: "redux",
    logo: <BiLogoRedux />,
    title: "Redux",
  },
];

export const clientExperience = [
  {
    title: "Google",
    subtitle: "Software Engineer",
    location: "Atlanta",
    activeYear: "2022 - Present",
    detail:
      "I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.",
    techs: techStack.slice(0, 5),
  },
  {
    title: "Facebook",
    subtitle: "Software Engineer",
    location: "San Francisco",
    activeYear: "2020 - 2022",
    detail:
      "Senior Full Stack Engineer for Facebook Marketplace. Created a service from scratch to handle new listings. Also played some ping pong. It was fun.",
    techs: techStack.slice(5, 8),
  },
  {
    title: "Amazon",
    subtitle: "Software Engineer",
    location: "Seattle",
    activeYear: "2016 - 2020",
    detail:
      "Data Engineer for store front. Built data pipelines with Spark and Airflow. Saw Bezos one time. He said he liked my paintings. I said I liked his hair.",
    techs: techStack.slice(1, 3),
  },
];

export const carouselItems = [
  {
    alt: "google",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png",
  },
  {
    alt: "facebook",
    image:
      "https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-transparent-png-pictures-icons-and-0.png",
  },
  {
    alt: "instagram",
    image:
      "https://www.transparentpng.com/thumb/logo-instagram/YfpFOL-logo-instagram-free-transparent.png",
  },
  {
    alt: "twitter",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png",
  },
  {
    alt: "snapchat",
    image:
      "https://static.vecteezy.com/system/resources/previews/023/741/177/original/snapchat-logo-icon-social-media-icon-free-png.png",
  },
  {
    alt: "linkedin",
    image: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  },
  {
    alt: "slack",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png",
  },
];

export const testimonial = [
  {
    name: "mona lisa",
    logo: null,
    personImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    detail:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
  },
  {
    name: "mona lisa",
    logo: null,
    personImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    detail:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
  },
  {
    name: "mona lisa",
    logo: null,
    personImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    detail:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
  },
  {
    name: "mona lisa",
    logo: null,
    personImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    detail:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
  },
  {
    name: "mona lisa",
    logo: null,
    personImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    detail:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
  },
];

export const sliderItems = [background1, background2, background3];
export const projectSliderItems = [
  {
    image: background1,
    title: "Project 1",
    description:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
  },
  {
    image: background2,
    title: "Project 2",
    description:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
  },
  {
    image: background3,
    title: "Project 3",
    description:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
  },
];

export const projectCard = [
  {
    title: "Project 1",
    img: "https://static.wixstatic.com/media/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg/v1/fill/w_640,h_408,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg",
    detail:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    link: "https://think-big-technology.web.app/",
  },
  {
    title: "Project 2",
    img: "https://codequotient.com/blog/wp-content/uploads/2023/04/Showcasing-Your-Web-Developer-Skills-Crafting-a-Portfolio-That-Packs-a-Punch.jpg",
    detail:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    link: "https://think-big-technology.web.app/",
  },
  {
    title: "Project 3",
    img: "https://5.imimg.com/data5/MH/FQ/OV/SELLER-52007146/personal-portfolio-website-500x500.jpg",
    detail:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    link: "https://think-big-technology.web.app/",
  },
  {
    title: "Project 4",
    img: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/292121659/original/c8d7a4162986e94e44e348f85b2ffeb77feb0a8d/develop-personal-portfolio-website-blog-or-business-website.jpg",
    detail:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    link: "https://think-big-technology.web.app/",
  },
];

export const project = [
  {
    id: "google",
    title: "Google",
    img: "https://static.wixstatic.com/media/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg/v1/fill/w_640,h_408,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg",
    detail:
      "A social community for painters to connect with others in their community. We handle everything backend (50K monthly active users).",
    percentage: "40%",
    percentageDescription:
      "Of sales attributed to digital alone, in 2023 (Q1).",
  },
  {
    id: "facebook",
    title: "Facebook",
    img: "https://static.wixstatic.com/media/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg/v1/fill/w_640,h_408,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg",
    detail:
      "A social community for painters to connect with others in their community. We handle everything backend (50K monthly active users).",
    percentage: "40%",
    percentageDescription:
      "Of sales attributed to digital alone, in 2023 (Q1).",
  },
  {
    id: "amazon",
    title: "Amazon",
    img: "https://static.wixstatic.com/media/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg/v1/fill/w_640,h_408,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg",
    detail:
      "A social community for painters to connect with others in their community. We handle everything backend (50K monthly active users).",
    percentage: "40%",
    percentageDescription:
      "Of sales attributed to digital alone, in 2023 (Q1).",
  },
];
