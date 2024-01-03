import { meta, shopify, starbucks, jaguarteam, tesla, traderoombar } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";


export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];


export const experiences = [
    {
        title: "Frontend Software Engineer",
        company_name: "Jaguar team",
        icon: jaguarteam,
        iconBg: "#accbe1",
        date: "April 2020 - May 2021",
        points: [
            "Develop frontend part of corporate websites using React.",
            "Develop cross-browser responsive landing pages.",
            "Google Maps API integrations.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend Software Engineer",
        company_name: "TradeRoomBar",
        icon: traderoombar,
        iconBg: "#fbc3bc",
        date: "MAY 2021– PRESENT",
        points: [
            "Develop new SPA, features, and components with React, native JS.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/All1in',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/bogdan-momot-5307a7242/',
    }
];



export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Lingerie',
        description: 'This project contains the code for the Lingerie website, an online store that provides the end user with all the features needed for a great user experience. The website is built using a stack of technologies including React, Redux-Toolkit, SASS, Bootstrap, Formik, and Yup for the front-end and Node.js, MongoDB, Mongoose, and Express.js for the back-end.',
        link: 'https://github.com/All1in/Lingerie.git',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Finance-App',
        description: 'Implemented a solution to display price tickers data on the UI in realtime.',
        link: 'https://github.com/All1in/finance-app.git',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Neo App',
        description: 'Single Page React application with information about near orbital objects (NEO), also Material UI used.',
        link: 'https://github.com/All1in/neo.git',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Chess Game',
        description: 'Chess game implemented using TypeScript + React',
        link: 'https://github.com/All1in/chess-game.git',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'This project contains JavaScript based examples of many popular algorithms and data structures.',
        link: 'https://github.com/All1in/algoritmsssssss.git',
    },
];

