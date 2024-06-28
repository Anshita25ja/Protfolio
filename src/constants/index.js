import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import {FaGithub} from 'react-icons/fa';
import { FaLinkedin} from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications, I have honed my skills in front-end technologies like HTML CSS JavaScript ,React.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "Voice assistant",
    image: project1,
    description:
      " It work as Virtual assistant where you say or write anything, it will repeat.It will open site if you say open YouTube, open google.it has its own songs section where a song is played from the provided list.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Weather App",
    image: project2,
    description:
      "It shows weather of any city, weather name, description, icon, temperature Celsius, also show min and max temperature.",
    technologies: ["HTML", "CSS",  'JavaScript (fetch API)'],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Amazon Clone",
    image: project4,
    description:
      "Create account, visit different page of website.",
    technologies: ["HTML", "CSS"],
  },
];

export const CONTACT = [
  {
  fname:'Youtube',
  lname: <FaYoutube/>,
  link:'https://youtube.com/@anshitajaiswal5721?si=g_Mg1cJ3I_evorJw'
},
{
  fname:'Github',
  lname: <FaGithub/>,
  link:'https://github.com/Anshita25ja'
},
{
  fname:'Linkedln',
  lname:<FaLinkedin/>,
  link:'www.linkedin.com/in/anshita-jaiswal-a57164247'
},
{
  fname:'Email',
  lname:<MdEmail/>,
  link:'ajais740@gmail.com'
},

]
 ;
