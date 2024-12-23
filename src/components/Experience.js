import React from 'react';

const experienceData = [
  {
    timePeriod: "July 2023 – Present",
    date: "July 2023 – Present",
    company: {
      name: "Jubilant Foodworks Ltd., Noida, India",
      logo: "/icons/jubilant_logo.jpeg",
      alt: "jubilant Logo",
    },
    role: "Software Engineer, DMS Team (Domino’s)",
    description: [
      "Integrated external APIs (MyGate and NoBroker) into the Delivery Management System (DMS), reducing average delivery time by a third and significantly improving the rider experience.",
      "Developed and automated an end-to-end rider incentive service, boosting operational efficiency by 25% and ensuring accurate and timely incentive distribution.",
      "Collaborated with the Payments Team to innovate a versatile payment system that enhanced payment gateway integration, accelerating transaction speed by 30%.",
      "Designed a robust wallet refund system, ensuring seamless and reliable customer reimbursements.",
    ],
    tools: "Springboot, JAVA, MongoDB, Cassandra, MariaDB, Redis, Kafka, RabbitMQ, ReactJs",
  },
  {
    timePeriod: "Jan 2023 – Jul 2023",
    date: "January 2023 – July 2023",
    company: {
      name: "Jubilant FoodWorks Ltd., Noida, India",
      logo: "/icons/jubilant_logo.jpeg",
      alt: "jubilant Logo",
    },
    role: "Software Engineer Intern, Payments Team (Domino’s)",
    description: [
      "Led the development of a Message Translation Service, enabling smooth communication across multiple payment gateways and enhancing cross-team collaboration.",
      "Developed a real-time VPA validation API, improving payment accuracy and streamlining the user experience within the Domino’s app.",
      "Contributed to the Payments team by composing extensive test cases using JUnit and Mockito, ensuring high code quality and streamlined functionality validation.",
    ],
    tools: "Springboot, JAVA, MongoDB, MySql, JUnit, RabbitMQ, REST API",
  },
  {
    timePeriod: "2021 – 2022",
    date: "March 2021 – March 2022",
    company: {
      name: "NIT Allahabad, Allahabad, Uttar Pradesh",
      logo: "images/iei_Logo.jpg",
      alt: "iei Logo",
    },
    role: "Coding Mentor",
    description: [
      "Appointed as the vice coding mentor of Computer Science department, led and mentor a team of 45+ members in driving transformative initiatives to improve coding culture by organizing 10+ coding sessions that upskilled over 200 participants and significantly boosted the chapter’s visibility.",
      "Contributed in problem setting for coding contest organised in college by CSE department.",
    ],
    tools: "",
  },
];

const Experience = () => {
  return (
    <div id="experience" className="background-alt">
      <h2 className="heading">Experience</h2>
      <div id="experience-timeline">
        {experienceData.map((experience, index) => (
          <div key={index} data-date={experience.date}>
            <span className="time-period">{experience.timePeriod}</span>
            <div className="company-info">
              <h3>{experience.company.name}</h3>
              <img
                src={experience.company.logo}
                alt={experience.company.alt}
                className="company-logo"
              />
            </div>
            <h4>{experience.role}</h4>
            <ul>
              {experience.description.map((desc, i) => (
                <li key={i}>
                  <p>{desc}</p>
                </li>
              ))}
            </ul>
            {experience.tools && (
              <p>
                <b>Tools: </b> {experience.tools}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
