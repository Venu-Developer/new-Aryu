import React from 'react'
import Overview from './CustomServices/overview'
import Bussiness from './CustomServices/Bussiness'
import Industry from './CustomServices/Industry'
import OurOffering from './CustomServices/OurOffering'
import ServiesNav from './CustomServices/ServicesNav'
import ServiceMain from './CustomServices/ServiceMain'
import ServicesHome from './serviesHome'
import img1 from '../../assets/Images/Services/Webdevelopment/webDevelopment.gif'

function WebDevelopment() {
  const overview = [
      {
        img: img1,
        des1: "A strong online presence starts with expert web development. We create fast, secure, and scalable websites that meet your business needs. Our services include custom website development, e-commerce, CMS integration, and responsive web design to ensure the best user experience.",
        des2: "Before starting any project, we first analyze competitors, conduct content keyword research, and then begin the design and development process. We work with businesses of all sizes, from large corporations to small start-ups, helping them build strong online brands. Our team delivers top-quality work, and we're known for being responsive and dedicated. We focus on creating SEO-friendly websites that perform well and drive conversions. Our clients trust us to deliver innovative solutions that help them succeed in a competitive market.",
        header: "Web Development Services",
        headerdis: "Building High-Performance Websites With Custom Solutions",
      },
    ];
    const bussiness = [
      {
      //   icon: img1,
        heading: "THE RIGHT PEOPLE",
        description:
          "The appropriate individuals are on my team to provide software creation services.",
        alt: "user",
      },
      {
      //   icon: img2,
        heading: "THE RIGHT TEAM",
        description:
          "From solo engineers to multi-team engagements. Flexible project management options.",
        alt: "diversity",
      },
      {
      //   icon: img3,
        heading: "THE RIGHT PLACE",
        description:
          "Our team members will be available with strong communication skills while you're online.",
        alt: "earth",
      },
      {
      //   icon: img4,
        heading: "THE RIGHT TIME",
        description:
          "Teams that begin as soon as you require them. Easy to scale up or down.",
        alt: "hourglass",
      },
  ]
  const industry = [
    {
    //   icon: img1,
      heading: "Supply Chain",
      description:
        "Empowered a UK-based client to gain complete control over procurement, logistics and transportation, and other indispensable business operations through continuous development, continuous integration, and continuous deployment.",
      alt: "user",
    },
    {
    //   icon: img2,
      heading: "Manufacturing",
      description:
        "Provided Devops consulting to a leading manufacturing giant to help them evolve their business using cloud. We reachitected their portfolio using our proven RAPADIT framework and deployed the re-developed solution using the DevOps approach",
      alt: "diversity",
    },
    {
    //   icon: img3,
      heading: "Finance",
      description:
        ",Partnered with a San Diego based banking and finance institution to make a smooth transition to agile Cloud infrastructure. This, in turn, improved the scalability and automated infrastructure provisioning with continuous development and deployment",
      alt: "earth",
    },
    {
    //   icon: img4,
      heading: "Final one",
      description:
        "Worked with a leading healthcare institution to help them manage their operations with our expert DevOps monitoring and support to identify and fix issues and bugs across the range of their internal and user-facing applications.",
      alt: "hourglass",
    },
    {
        //   icon: img4,
          heading:"Hospitality",
          description:
            "Rapidly increasing clients with their needs required regular enhancement and updates of their applications without operational errors and system failures. Our DevOps experts accelerated delivery of features, bug fixes and updates without any downtime and failures",
          alt: "hourglass",
        },
        {
            //   icon: img4,
              heading: "Travel",
              description:
                "Helped a travel client based out of Australia to quickly deploy its application to the market using DevOps. This approach enabled the client to gain a fast-mover advantage over its competitors by continuously testing and integrating new features",
              alt: "hourglass",
            },
]
const ourOfferings = [
  {
    head: "DevOps Consulting Services",
    des: "Leverage the power of PHP to craft dynamic, interactive, and scalable web applications that align with your specific business requirements.",
  },
  {
    head: "DevOps Implementation & Containerization Services",
    des: "Design and develop tailored web solutions with your brand identity, target audience, and business objectives, ensuring a remarkable online presence.",
  },
  {
    head: "Azure DevOps Services",
    des: "Establish a centralized and secure online hub for users to access information, manage tasks, streamlining operations and boosting productivity.",
  },
  {
    head: "DevOps CI/CD Services",
    des: "Integrate third-party APIs into your web applications to expand their functionality, access valuable data, and enhance user experience, fostering seamless connectivity.",
  },
  {
    head: "AWS DevOps Services",
    des: "Implement a user-friendly content management system that empowers you to effortlessly create, manage, and update your website’s content without the need for coding expertise.",
  },
  {
    head: "DevOps Release Management and Orchestration",
    des: "Help your business grow with our SEO Experts.",
  },
];
// faQ
let faqData = [
  {
    question: "What is Webflow and why is it the best website builder?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What is Webflow and why is it the best website builder?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What is Webflow and why is it the best website builder?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
  return (
    <div>
      <ServiceMain/>
      <ServiesNav/>
    <ServicesHome overview={overview} bussiness={bussiness} industry={industry} ourOfferings={ourOfferings} faqData={faqData}/>
    </div>
  )
}
export default WebDevelopment;