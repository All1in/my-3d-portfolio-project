import { meta, shopify, starbucks, jaguarteam, tesla } from "../assets/images";
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
    typescript,
    dokUa,
    ciklum,
    download
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
        title: "React Frontend developer",
        company_name: "Sigma Software",
        icon: download,
        iconBg: "#accbe1",
        date: "April 2023 - PRESENT",
        points: [
            "Drove the frontend migration from PHP/jQuery to React and TypeScript. Lighthouse: 54 to 83, LCP: 4.2 to 2.4 s",
            "Cut the JS bundle from 1.35 MB to 412 KB via code splitting, tree-shaking, and lazy loading — 3.6x faster page loads",
            "Stood up the entire test infrastructure: Jest (unit), React Testing Library (integration), and Playwright (E2E) wired into CI/CD. Coverage:\n" +
            "0% to 65%, regression testing: 5 days to 2",
            "Rolled out i18n for 22 languages via Crowdin and react-i18next — broader reach drove monthly sign-ups from ~800 to ~1,100",
            "Built a Puppeteer-based Lighthouse runner — perf checks fire automatically on every deploy",
            "Built a Storybook component library (40+ components, Atomic Design) — cut new screen build time from a full day to 2-3 hours",
            "Set up CI/CD with Docker and preview deploys — QA started testing features before merge to main"
        ],
    }
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
        link: 'https://www.linkedin.com/in/bohdan-momot-5307a7242/',
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
        name: 'my-video-chat',
        description: 'This project leverages the power of React and WebRTC to create a real-time communication (RTC) application. WebRTC is a free, open-source project that provides web browsers and mobile applications with real-time communication via simple application programming interfaces (APIs). Paired with the popular React library, this project aims to deliver a seamless and interactive user experience for real-time communication needs.',
        link: 'https://github.com/All1in/my-video-chat.git',
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
        name: 'Algorithms implemented in JavaScript',
        description: 'This project contains JavaScript based examples of many popular algorithms and data structures.',
        link: 'https://github.com/All1in/algoritmsssssss.git',
    },
];

