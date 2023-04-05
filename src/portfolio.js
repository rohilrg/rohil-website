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
  username: "Rohil Gupta",
  title: "Hi all, I'm Rohil",
  subTitle: emoji(
    "Data Scientist at heart. MLOps Engineer by profession. DevOps and Backend engineer on demand. Bitcoin and Lightning engineer on mind."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rohilrg",
  linkedin: "https://www.linkedin.com/in/rohil-gupta/",
  gmail: "rohil.rg@gmail.com",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A MLOps Engineer creating pipelines to provide production ready Machine Learning models.",
  skills: [
    emoji(
      "⚡ Deploy end-to-end applications to serve high value ML models to users."
    ),
    emoji("⚡ Create Rest APIs that interacts with the database and frontend."),
    emoji(
      "⚡ Research in fields of NLP(Natural Language Processing), Computer Vision and Classical Machine Learning."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
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
      schoolName: "Université Jean Monnet",
      logo: require("./assets/images/université-jean-monnet-squarelogo-1454686780375.png"),
      subHeader: "Master of Science in Machine Learning & Data Mining",
      duration: "September 2017 - June 2019",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Rajasthan Technical University",
      logo: require("./assets/images/images.jpeg"),
      subHeader: "Bachelor of Technology in Electrical Engineering",
      duration: "August 2013 - May 2017",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "MLOps", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Science",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "MLOps and Backend Engineer",
      company: "Capgemini",
      companylogo: require("./assets/images/1617853380354.jpeg"),
      date: "March 2022 – Present",
      descBullets: [
        "Delivered NLP model to extract the logical relations in Clinical Trial Inclusion and Exclusion criteria.",
        "Delivered a Flask Rest API to do internal post processing task of the application being developed.",
        "Deployment of Alphafold with a backend in flask.",
        "Creating, deploying and maintaining the CI/CD pipeline hosted on ArgoCD using Kubernetes."
      ]
    },
    {
      role: "Data Scientist",
      company: "Whitelab Genomics",
      companylogo: require("./assets/images/1592576290372.jpeg"),
      date: "June 2020 – March 2022",
      descBullets: [
      "Created framework to scrape, parse and push Bio-medical data related to Gene Therapy in Neo4j database.",
      "Created backend with Flask to interact with Neo4j and push the data to the frontend of the app.",
      "Developed a tool 'Relevant-Document-finder' to retrieve pertinent documents for the combination of biological keywords from 2.5 million full-text open-source publications, clinical trials, and patents.",
      "Delivered a ML classifier to predict the viability of AAV(Adeno Associate Virus) capsid for Gene Therapy."
      ]
    },
    {
      role: "Data Scientist",
      company: "Mindee",
      companylogo: require("./assets/images/1562849293798.jpeg"),
      date: "Sept 2019 – April 2020",
      descBullets: [
      "Delivered NLP classification models for expense receipts.",
       "Delivered an end-to-end deep learning multi-feature extraction model for French national identity cards and petrol receipts.",
       "Development of Mindee Vision API similar to the Google Vision API."
      ]
    },
    {
      role: "Data Scientist Intern",
      company: "Square Sense",
      companylogo: require("./assets/images/1622652885547.jpeg"),
      date: "Feb 2019 – Aug 2019",
      descBullets: [
      "Implemented Multi-Object Tracker in videos.",
       "Batch data processing with Apache Beam and scalability analysis.",
        "Electricity Data Consumption Exploration and Fault Detection using ARIMA, AR, fbprophet forecasting models."
      ]
    },
    {
      role: "Data Scientist Intern",
      company: "AGT International",
      companylogo: require("./assets/images/1519856979422.jpeg"),
      date: "April 2018 – Aug 2018",
      descBullets: [
      "Development of tool, driven by IMU sensor data for the correction of manual annotations using Peak Detection and Dynamic Time Wrapping.",
       "Generation of Generalized Template of different punch types using Dynamic Time Wrapping Averaging.",
"Feature Engineering on the top of joint position in space from video based skeleton tracking for the classification models of the punch types."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

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
      imageAlt: "Google Code-In Logo",
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
      imageAlt: "Google Assistant Action Logo",
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
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "rohil.rg@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "RohilGupta", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
