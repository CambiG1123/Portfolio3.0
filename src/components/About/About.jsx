import React from "react";
import AboutItem from "./AboutItem";
import TechItem from "./TechItem";
const aboutItems = [
  {
    year: 2018,
    title: "Current Profession: Electrician",
    duration: "2018-Present",
    details:
      "As a qualified electrician, I have a passion for technology and problem solving. I have worked in the electrical industry for the past 5 years on a range of projects in residential and commercial spaces. With a focus on the varied needs of clients, I have real world experience in making a client's vision a reality. I have worked in multiple teams of varying sizes as well as independently out in the field. I am always looking to improve my skills and knowledge and because of this am seeking to make a career change into the tech industry and am excited to see where this journey takes me.",
  },
  
];
const techItems = [
    {
        title: 'JavaScript',
        details: 'I have used Javascript to build a variety of projects including this portfolio. I am comfortable using Javascript to build both the front end and back end of a project.'
    },
    {
        title: 'Html & CSS',
        details: 'For front end styling and layouts'
    },
    {
        title: 'React',
        details: 'My preferred front end framework'
    },
    {
        title: 'Node',
        details: 'For building the back end of a project'
    },
    {
        title: 'Express',
        details: 'For building the back end of a project'
    },
    {
        title: 'MongoDB',
        details: 'Used in several projects for database management'
    },
    {
        title: 'Tailwind CSS',
        details: 'Used in this portfolio as well as other projects to create a responsive and visually appealing UI'
    },
    {
        title: 'Bootstrap',
        details: 'Used in several projects to create a responsive and visually appealing UI'
    },
    {
        title: 'MYSQL',
        details: 'Used in several projects for database management'
    },
]
const About = () => {
  return (
    <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-black">About Me</h1>
      {aboutItems.map((aboutItem, idx) => (
        <AboutItem
          key={idx}
          year={aboutItem.year}
          title={aboutItem.title}
          duration={aboutItem.duration}
          details={aboutItem.details}
        />
      ))}
      <h1 className="text-4xl font-bold text-center text-black">Tech Knowledge</h1>
      <p className="my-2 text-base text-center font-normal underline underline-offset-2 decoration-cyan-700 text-stone-800">I am a MERN stack developer proficient in the following technologies:</p>
    {techItems.map((techItem, idx) => (
        <TechItem
          key={idx}
          title={techItem.title}
          details={techItem.details}
        />
          ))}
    </div>
  );
};

export default About;
