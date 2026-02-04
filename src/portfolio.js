/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vivek Keshtwal",
  title: "Hi all, I'm Vivek",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/keshtwalvivek?tab=repositories",
  linkedin: "https://www.linkedin.com/in/vivek-keshtwal/",
  gmail: "vivekkeshtwal09@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

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
      skillName: "react native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fab fa-react"
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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dev Bhoomi Uttarakhand University",
      logo: require("./assets/images/DBUU.jpg"),
      subHeader: "Bachelor of Computer Science",
      duration: "September 2021 - April 2024",
      desc: "Focused on core computer science fundamentals with hands-on experience in web development, software engineering, and modern frontend technologies.",
      descBullets: [
        "Studied Data Structures, Algorithms, Operating Systems, DBMS, and Computer Networks",
        "Built responsive web applications using HTML, CSS, JavaScript, React, and REST APIs",
        "Worked on academic and personal projects following real-world software development practices",
        "Gained experience with Git, GitHub, and collaborative development during coursework"
      ]
    },
    {
      schoolName: "GIC Kandakhal ",
      logo: require("./assets/images/school.jpg"),
      subHeader: "Schooling - Science Stream",
      duration: "April 2016 - April 2020",
      desc: "Completed schooling in the Science stream with a strong academic foundation.",
      descBullets: [
        "Mathematics and Science-focused curriculum",
        "Built fundamentals for higher studies in computer science"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer",
      company: "SGI Tech Labs",
      companylogo: require("./assets/images/sgi.jpg"), // add logo image
      date: "August 2024 – Present",
      desc: "Working as a Frontend Developer at SGI Tech Labs, contributing to both web and mobile application development across multiple projects.",
      descBullets: [
        "Worked on web development projects using React.js and Next.js, building responsive and scalable user interfaces.",
        "Collaborated with backend teams to integrate APIs and improve application performance.",
        "From April 2025, started working on React Native mobile application development within the same organization.",
        "Developed and maintained cross-platform mobile features using React Native for production applications."
      ]
    },

    {
      role: "MERN Stack Developer Intern",
      company: "Think Future Technology",
      companylogo: require("./assets/images/tft.png"), // add logo image
      date: "3 Months Internship",
      desc: "Completed a 3-month internship focused on full-stack web development using the MERN stack.",
      descBullets: [
        "Worked on MongoDB, Express.js, React.js, and Node.js to build full-stack web applications.",
        "Developed REST APIs and integrated them with frontend components.",
        "Implemented authentication, CRUD operations, and responsive UI designs.",
        "Gained hands-on experience working in an agile development environment."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

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

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "MERN Stack Full-Stack Developer",
      subtitle:
        "Completed a comprehensive Full-Stack Development course using the MERN stack (MongoDB, Express.js, React.js, Node.js), building real-world projects and production-ready applications.",
      image: require("./assets/images/MERN.avif"), // add your MERN image here
      imageAlt: "MERN Stack Logo",
      footerLink: [
        {
          name: "Certification",
          url: "/mern.pdf" // add certificate link (Google Drive / platform link)
        }
      ]
    },
    // {
    //   title: "DevOps Fundamentals",
    //   subtitle:
    //     "Completed DevOps course on Udemy covering CI/CD, GitHub Actions, Docker, cloud deployment, and automation workflows.",
    //   image: require("./assets/images/devops.webp"), // add image
    //   imageAlt: "DevOps Logo",
    //   footerLink: [
    //     {
    //       name: "Udemy Certification",
    //       url: ""
    //     }
    //   ]
    // },
    {
      title: "React Native Mobile App Developer",
      subtitle:
        "Completed React Native course on Udemy, learning to build cross-platform mobile applications with real-world projects.",
      image: require("./assets/images/reactnative.png"), // add image
      imageAlt: "React Native Logo",
      footerLink: [
        {
          name: "Udemy Certification",
          url: "" // place PDF in public folder
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
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9027846327",
  email_address: "vivekkeshtwal09@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable,
  resumeSection
};
