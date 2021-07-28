import emoji from "react-easy-emoji";
import { HotModuleReplacementPlugin } from "webpack";

const illustration = {
    animated : true
};

const greeting = {
    username: "Axhar Arshad",
    title: "Hi all, I am Azhar",
    subTitle: emoji("Very passionate Full Stack Software Developer 🚀 having an experiance of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / SQL and some other cool libraries and frameowrks." ),
    resumeLink: "https://drive.google.com/file/d/1BKld8QzrxUbiA9m-zKqKelzhwGjRlScj/view?usp=sharing",
    displayGreetings: true
};

const socialMediaLinks = {
    github: "https://github.com/Axhar85",
    linkedin: "https://www.linkedin.com/in/azhar-arshad/",
    yahoomail: "azhararshad_ntu@yahoo.com",
    gmail: "azhararshadntu@gmail.com",
    hotmail: "azhararshad_ntu@hotmail.com",
    codeWars: "https://www.codewars.com/users/Axhar85",
    instagram: "https://www.instagram.com/axhar/",
    facebook: "https://www.facebook.com/azhar.arshad.94/",
    twitter: "",
    display: true
};

const skillsSection = {
    title: "What I do",
    subTitle: "A FULL STACK DEVELOPER WHO WANTS TO LEARN MORE EVERYDAY AND WRITE SOME AMAZING CODES",
    skills: [
        emoji( "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
        emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),   
    ],


softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
        skillName: "github",
        fontAwesomeClassname: "fab fa-swift"
      },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true 
};

const educationInfo = {
    display: true,
    schools: [
        { 
            schoolName: "WoldCodeSchool",
            logo: require("./wildlogo.png"),
            subHeader: "Full Stack webdevelopment",
            duration: "March 2021 - July 2021",
            desc: "Learnt A fullstack web development program with JavaScript",
            descBullets: [
                "Daily standups and working with team in projecrts",
                "Taking parts in Hackathon building the projects under pressure",
                "Working on real time projects with clients"
            ]
        },
        {
            schoolName: "Punjab Universty",
            logo: require("./punjabuni.png"),
            subHeader: "Bachelor's Degree in Buiness and Commerce",
            duration: "2007",
            desc: "Specalized in Business Adminstration",
            descBullets: [
                "studied Accounting, Auditing, Business Law, and Ecnomics."
            ]
        }
    ]
        
};

const techStack = {
    viewSkillBars: true, 
    experience: [
      {
        Stack: "Frontend/Design", 
        progressPercentage: "90%" 
      },
      {
        Stack: "Backend",
        progressPercentage: "70%"
      },
      {
        Stack: "Programming",
        progressPercentage: "70%"
      }
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
  };

  const workExperiences = {
    display: true, 
    experience: [
      {
        role: "Software Developer",
        company: "Redefine",
        companylogo: require("./assets/images/facebookLogo.png"),
        date: "June 2018 – Present",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        descBullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        ]
      },
      {
        role: "Front-End Developer",
        company: "Quora",
        companylogo: require("./assets/images/quoraLogo.png"),
        date: "May 2017 – May 2018",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        role: "Software Engineer Intern",
        company: "Airbnb",
        companylogo: require("./assets/images/airbnbLogo.png"),
        date: "Jan 2015 – Sep 2015",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  };

  const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: true // Set false to hide this section, defaults to true
  };
  

  const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [
      {
        image: require("./assets/images/saayaHealthLogo.webp"),
        projectName: "Saayahealth",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        footerLink: [
          {
            name: "Visit Website",
            url: "http://saayahealth.com/"
          }
          //  you can add extra buttons here.
        ]
      },
      {
        image: require("./assets/images/nextuLogo.webp"),
        projectName: "Nextu",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        footerLink: [
          {
            name: "Visit Website",
            url: "http://nextu.se/"
          }
        ]
      }
    ],
    display: true // Set false to hide this section, defaults to true
  };

  const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle:
      "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  
    achievementsCards: [
      {
        title: "Google Code-In Finalist",
        subtitle:
          "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
        image: require("./assets/images/codeInLogo.webp"),
        footerLink: [
          {
            name: "Certification",
            url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
          },
          {
            name: "Award Letter",
            url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
          },
          {
            name: "Google Code-in Blog",
            url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
          }
        ]
      },
      {
        title: "Google Assistant Action",
        subtitle:
          "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
        image: require("./assets/images/googleAssistantLogo.webp"),
        footerLink: [
          {
            name: "View Google Assistant Action",
            url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
          }
        ]
      },
  
      {
        title: "PWA Web App Developer",
        subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
        image: require("./assets/images/pwaLogo.webp"),
        footerLink: [
          {name: "Certification", url: ""},
          {
            name: "Final Project",
            url: "https://pakistan-olx-1.firebaseapp.com/"
          }
        ]
      }
    ],
    display: true // Set false to hide this section, defaults to true
  };
  
  // Blogs Section
  
  const blogSection = {
    title: "Blogs",
    subtitle:
      "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  
    blogs: [
      {
        url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
        title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
        description:
          "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
      },
      {
        url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
        title: "Why REACT is The Best?",
        description:
          "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
      }
    ],
    display: true // Set false to hide this section, defaults to true
  };
  
  // Talks Sections
  
  const talkSection = {
    title: "TALKS",
    subtitle: emoji(
      "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),
  
    talks: [
      {
        title: "Build Actions For Google Assistant",
        subtitle: "Codelab at GDG DevFest Karachi 2019",
        slides_url: "https://bit.ly/saadpasta-slides",
        event_url: "https://www.facebook.com/events/2339906106275053/"
      }
    ],
    display: true // Set false to hide this section, defaults to true
  };
  
  // Podcast Section
  
  const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  
    // Please Provide with Your Podcast embeded Link
    podcast: [
      "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: true // Set false to hide this section, defaults to true
  };
  
  const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle:
      "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+34-667 92 72 85",
    email_address: "azhararshad_ntu@yahoo.com"
  };
  
  // Twitter Section
  
  const twitterDetails = {
    userName: "twitter", //Replace "twitter" with your twitter username without @
    display: true // Set true to display this section, defaults to false
  };
  
  export {
    illustration,
    greeting,
    socialMediaLinks,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails
  };


