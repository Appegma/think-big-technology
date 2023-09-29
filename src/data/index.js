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
  // BiCode,
  BiLogoTailwindCss,
  BiLogoPhp,
  BiLogoPython,
} from "react-icons/bi";
import { AiFillFacebook, AiOutlineAmazon, AiFillCode } from "react-icons/ai";
import { FaAddressBook } from "react-icons/fa";
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
import team01 from "../assets/team/img-01.jpeg";
import team02 from "../assets/team/img-02.jpeg";
import team03 from "../assets/team/img-03.jpeg";
import team04 from "../assets/team/img-04.jpeg";
import team05 from "../assets/team/img-05.jpeg";
import team06 from "../assets/team/img-06.jpeg";
import team07 from "../assets/team/img-07.jpeg";
import team08 from "../assets/team/img-08.jpeg";
import team09 from "../assets/team/img-09.jpeg";
import team10 from "../assets/team/img-10.png";
import video01 from "../assets/case/video-01.MOV";
import video02 from "../assets/case/video-02.MOV";
import video03 from "../assets/case/video-03.MOV";
import broadwaysupercars from "../assets/testimonials/broadway-supercar.png";

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
    id: "code",
    logo: <AiFillCode />,
    title: "Code",
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
    description: "Where websites go from 'meh' to 'yeah!'",
  },
  {
    id: "react",
    image: reactlogo,
    title: "React",
    description:
      " Like a fine-tuned orchestra conductor for your web elements.",
  },
  {
    id: "html",
    image: htmllogo,
    title: "HTML",
    description:
      "The magical ink that turns your ideas into web pages, one tag at a time.",
  },
  {
    id: "css",
    image: csslogo,
    title: "CSS",
    description:
      "The stylish wardrobe that makes your website strut its stuff on the digital catwalk",
  },
  {
    id: "angular",
    image: angularlogo,
    title: "Angular",
    description:
      "Because your web apps deserve more angles than an action movie.",
  },
  {
    id: "vue",
    image: vuelogo,
    title: "Vue",
    description: "Where web design goes from 'good' to 'viewtiful'!",
  },
  {
    id: "typescript",
    image: typescriptlogo,
    title: "Typescript",
    description: "Because real coding is more than just a suggestion.",
  },
  {
    id: "node",
    image: nodelogo,
    title: "Node",
    description:
      "Where your code finds a home and throws the best JavaScript parties!",
  },
  {
    id: "github",
    image: githublogo,
    title: "Github",
    description:
      "Where code goes to make friends and impress your digital neighbors.",
  },
  {
    id: "redux",
    image: reduxlogo,
    title: "Redux",
    description:
      " Because even code sometimes needs a superhero sidekick to manage its state of affairs",
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
  {
    id: "tailwind",
    logo: <BiLogoTailwindCss />,
    title: "Tailwind CSS",
  },
  {
    id: "php",
    logo: <BiLogoPhp />,
    title: "PHP",
  },
  {
    id: "python",
    logo: <BiLogoPython />,
    title: "Python",
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
    name: "24/7 Fire Protection Inc.",
    logo: "https://24-7fireprotection.com/wp-content/uploads/logo.webp",
    personImage: "https://24-7fireprotection.com/wp-content/uploads/logo.webp",
    detail:
      "At 24/7, our projects are grand in scale and require precise coordination. TBT has been instrumental in not just digitizing our operations but also streamlining them.",
  },
  {
    name: "Underdog Fire & Security Inc.",
    logo: "https://www.underdogfs.com/wp-content/uploads/logo.webp",
    personImage: "https://www.underdogfs.com/wp-content/uploads/logo.webp",
    detail:
      "In our line of business at Underdog, security is paramount. Think Big Technology didn't just understand our needs – they anticipated them. ",
  },
  {
    name: "The Halal Guys",
    logo: "https://thehalalguys.com/wp-content/themes/halal-guys/assets/images/site-logo-2x.png",
    personImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    detail:
      "Think Big understood the essence of our brand and developed a system that manages our daily operations & enhances our customer's experience.",
  },
  {
    name: "The Art of Wings",
    logo: "https://www.theartofwings.com/wp-content/uploads/logo-footer.png",
    personImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    detail:
      "Wings, flavors, and speed - that’s what we’re about.. Think Big helped us speed up our order processes & introduce an intuitive online ordering platform. ",
  },
  {
    name: "Elan",
    logo: "http://www.elanpastry.com/wp-content/uploads/logo-light.png",
    personImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    detail:
      "Running a cafe in the heart of a major city is no small feat. Think Big Technology came in and revolutionized our operations.",
  },
  {
    name: "Broadway Supercars",
    logo: broadwaysupercars,
    personImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    detail:
      "At BSC, our cars are more than just vehicles; they're an experience. Think Big grasped that concept and delivered a booking platform that is sleek, user-friendly, and mirrors the luxury of our cars.",
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
    img: "https://24-7fireprotection.com/wp-content/uploads/installation-02.webp",
    detail:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    link: "https://www.24-7fireprotection.com/",
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
    id: "case_01",
    title: "24/7 Fire Protection Inc.",
    video: video01,
    image:
      "https://24-7fireprotection.com/wp-content/uploads/installation-02.webp",
    detail:
      "One of the Top Fire Sprinkler Contractors in the New York / New Jersey metro area. A Think Big Technology customer since 2021.",
    percentage: "40%",
    percentageDescription:
      "Year over Year growth since onboarding with Think Big Technology for enterprise IT & Software Development.",
  },
  {
    id: "case_02",
    title: "Underdog Fire & Security Inc.",
    video: video02,
    image:
      "https://static.wixstatic.com/media/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg/v1/fill/w_640,h_408,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg",
    detail:
      "An AI Powered Security & Alarm startup in the New York / New Jersey metro area. A Think Big Technology customer since 2022.",
    percentage: "90%",
    percentageDescription: "Year over Year growth in their first year with us.",
  },
  {
    id: "case_03",
    title: "Broadway Supercars",
    video: video03,
    image:
      "https://static.wixstatic.com/media/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg/v1/fill/w_640,h_408,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg",
    detail:
      "An Exotic Car Rental Club leading the way with innovation in an industry that desperately needed it. Think Big Technology revamped their business model and provided new strategies to create monetization streams.",
    percentage: "54%",
    percentageDescription:
      "Of sales attributed to digital ads, social media & web, in 2023 (Q1).",
  },
];

export const clientExperience = [
  {
    id: "emp_01",
    title: "Omar Hafez",
    subtitle: "CEO / Lead Software Engineer",
    // location: "USA",
    // activeYear: "2022 - Present",
    detail:
      "As the founder and Lead Software Engineer at Think Big Technology, Omar brings over a decade of extensive technology expertise to the forefront. Since embarking on his technology journey in 2012, Omar has honed his skills to a razor-sharp edge, boasting a remarkable portfolio of certifications, including ITIL, CompTIA, Linux Professional Institute, Project Management Institute, and AWS. With a master's degree in IT Management under his belt, he leads our team with a visionary perspective, backed by hands-on proficiency in React and a versatile command of backend languages, from Node.js to Python, weaving innovation into the very fabric of our digital solutions.",
    techs: techStack.slice(0, 13),
    image: team01,
  },
  {
    id: "emp_02",
    title: "Nuwan Rathnayake",
    subtitle: "IT Manager / Senior Systems Engineer",
    // location: "San Francisco",
    // activeYear: "2020 - 2022",
    detail:
      "Meet Nuwan, our accomplished Software and System Engineer, whose journey began in the vibrant landscape of Sri Lanka. With a demonstrated history of excellence in the information technology and services industry, Nuwan is the driving force behind our technical operations. Nuwan's expertise spans a diverse spectrum of development platforms, from the realms of Microsoft to the open-source frontier. His proficiency is a testament to his adaptability, seamlessly transitioning between technologies to craft solutions that are not only effective but also innovative.",
    techs: techStack.slice(5, 8),
    image: team02,
  },
  {
    id: "emp_03",
    title: "Raman Rana",
    subtitle: "Mobile Applications Developer",
    // location: "Seattle",
    // activeYear: "2016 - 2020",
    detail:
      "Meet Raman, our seasoned mobile development virtuoso, a true maven in the realms of iOS, Android, and Flutter, bringing nine years of invaluable expertise to our team. Raman's journey in the mobile technology arena has been marked by a relentless pursuit of excellence. With close to a decade of hands-on experience, he has honed his skills to a razor-sharp edge, becoming a go-to expert in crafting dynamic, user-centric mobile applications. His proficiency extends across the entire mobile ecosystem, from the sleek and intuitive iOS interfaces to the adaptable and versatile Android platforms, not to mention the cross-platform brilliance of Flutter.",
    techs: techStack.slice(1, 3),
    image: team03,
  },
  {
    id: "emp_04",
    title: "Abhinav Vatsal",
    subtitle: "Software Engineer",
    // location: "Seattle",
    // activeYear: "2016 - 2020",
    detail:
      "Meet Abhinav, the master of server-side languages and a dynamic force on our team. With a rich tapestry of five years of experience, he is our go-to expert when it comes to harnessing the power of server-side technologies, especially PHP.",
    techs: techStack.slice(1, 3),
    image: team04,
  },
  {
    id: "emp_05",
    title: "Salman Alim",
    subtitle: "Data Engineer",
    // location: "Seattle",
    // activeYear: "2016 - 2020",
    detail:
      "Meet Salman, our esteemed Data Engineer, a luminary in the field with extensive experience in the world of Python. With a career steeped in data-driven insights and a wealth of knowledge, Salman is the visionary behind our data-driven strategies. Salman's journey in the realm of data science is marked by his exceptional expertise in Python, the quintessential language for data manipulation and analysis. His work is a symphony of algorithms and insights, meticulously crafted to unlock the hidden patterns within complex datasets. His analytical prowess is the compass guiding our decision-making, turning raw data into actionable intelligence.",
    techs: techStack.slice(1, 3),
    image: team05,
  },
  {
    id: "emp_06",
    title: "Masood Ali",
    subtitle: "Project Manager / Wordpress Developer",
    // location: "Seattle",
    // activeYear: "2016 - 2020",
    detail:
      "Meet Masood, our seasoned technology virtuoso hailing originally from Pakistan, bringing nearly two decades of invaluable experience to our team. In his role as one of our esteemed Project Managers and top-notch WordPress Developer, Masood is the driving force behind our successful projects and digital solutions.",
    techs: techStack.slice(1, 3),
    image: team06,
  },
  {
    id: "emp_07",
    title: "Ana Turbino",
    subtitle: "UI / UX Designer",
    // location: "Seattle",
    // activeYear: "2016 - 2020",
    detail:
      "In the expansive realm of UI/UX design, Ana emerges as an exemplary talent, specializing in the art of wireframing, prototyping, and branding. With her meticulous approach, every design element takes on a purposeful role, contributing to an elegant synergy of form and function. Ana's expertise goes beyond aesthetics; her creations transform digital interfaces into intuitive landscapes that guide and captivate users. Her designs are not just aesthetically pleasing; they evoke emotions and forge meaningful connections, ensuring that every user experience is a memorable journey. With Ana's exceptional skills at the helm, Think Big Technology sets a standard of excellence in the world of digital design.",
    techs: techStack.slice(1, 3),
    image: team07,
  },
  {
    id: "emp_08",
    title: "Camila Palma",
    subtitle: "Social Media Manager",
    // location: "Seattle",
    // activeYear: "2016 - 2020",
    detail:
      "Meet Camila, our resident Social Media Maestro. With a degree from St. John's University in her back pocket, she ventured into the dynamic world of social media management armed with a rare blend of knowledge and creativity. Camila's journey in the digital realm is characterized by her unwavering commitment to staying at the forefront of industry trends, ensuring that every campaign she manages is not just cutting-edge but also strategically sound.",
    techs: techStack.slice(1, 3),
    image: team08,
  },
  {
    id: "emp_09",
    title: "Bryan Palma",
    subtitle: "Social Media Marketing / Content Generation",
    // location: "Seattle",
    // activeYear: "2016 - 2020",
    detail:
      "Meet Bryan, the youthful dynamo of our team, responsible for the exciting realms of social media marketing and content creation. While his age might belie his experience, don't be fooled, Bryan is a digital prodigy with a talent for storytelling that's simply unmatched.Bryan's journey into the world of social media and content creation has been nothing short of extraordinary. Armed with an innate flair for cinematography and photography, he transforms ordinary moments into visually stunning narratives. His camera lens is his magic wand, conjuring up visuals that captivate and immerse audiences in brand stories.",
    techs: techStack.slice(1, 3),
    image: team09,
  },
  {
    id: "emp_10",
    title: "Muhammad R. Paracha",
    subtitle: "Wordpress Developer",
    // location: "Seattle",
    // activeYear: "2016 - 2020",
    detail:
      "Muhammad R. Paracha is a skilled WordPress Developer recognized for his expertise in crafting elegant and functional websites. With a passion for coding and a keen eye for design, he transforms visions into captivating online experiences. Muhammad's dedication lies in creating websites that not only aesthetically impress but also deliver seamless user experiences. He thrives on staying updated with the latest trends int eh dynamic field of web development, ensuring his projects are at the forefront of design and functionality.",
    techs: techStack.slice(1, 3),
    image: team10,
  },
];

export const teamDetails = [
  {
    id: "1",
    name: "Omar Hafez",
    designation: "Founder / Lead Software Engineer",
    image: team01,
  },
  {
    id: "2",
    name: "Nuwan Rathnayake",
    designation: "Systems Engineer",
    image: team02,
  },
  {
    id: "3",
    name: "John Doe",
    designation: "CEO",
    image: team08,
  },
  {
    id: "4",
    name: "John Doe",
    designation: "CEO",
    image: team09,
  },
  {
    id: "5",
    name: "John Doe",
    designation: "CEO",
    image: team05,
  },
  {
    id: "6",
    name: "Ana Turbino",
    designation: "UI / UX Designer",
    image: team06,
  },
  {
    id: "7",
    name: "Masood Ali",
    designation: "Project Manager",
    image: team07,
  },
  {
    id: "8",
    name: "Camila Palma",
    designation: "Social Media Manager",
    image: team03,
  },
  {
    id: "9",
    name: "Bryan Palma",
    designation: "Social Media Marketing / Content Generation",
    image: team04,
  },
];

export const aboutDetail = [
  {
    value: `Welcome to the epicenter of technological innovation, just beyond the bustling landscape of New York City. Founded in 2021, our journey commenced with a vision - to be at the forefront of pioneering technological solutions that reshape industries and empower businesses to thrive in a rapidly evolving digital landscape.`,
  },
  {
    value: `At the heart of our operation resides a team of 15 in-house developers, each a maestro in their respective domains, wielding the power of code to craft solutions that transcend the ordinary. Our assembly of brilliant minds extends beyond developers to encompass a cadre of UI/UX designers, the architects of seamless and intuitive user experiences that define excellence in the digital realm. But we don't stop there. Beyond the realms of software and design, we boast a battalion of network and IT engineers who orchestrate the complex symphony of infrastructure, ensuring uninterrupted connectivity and security in a world where data is paramount.`,
  },
  {
    value: `In a world where information flows ceaselessly, our social media marketing team serves as the gatekeepers of visibility and engagement, strategically deploying campaigns that captivate, engage, and convert. In every line of code, every pixel perfected, every network secured, and every campaign launched, we engineer not just products and services but also futures. Futures where innovation is a given, transformation is the norm, and excellence is the benchmark.`,
  },
  {
    value: `Join us as we navigate the frontiers of technology, not just as observers but as pioneers. Welcome to a world where boundaries are not constraints but canvases, waiting to be filled with the brushstrokes of innovation. Explore our technological sanctuary, where ideas evolve into solutions, and aspirations ascend into achievements. This is more than technology; this is the future, and we invite you to be a part of it.`,
  },
];
