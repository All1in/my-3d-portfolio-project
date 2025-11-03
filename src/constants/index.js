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
    ciklum
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
        company_name: "dok.ua",
        icon: dokUa,
        iconBg: "#accbe1",
        date: "August 2024 - PRESENT",
        points: [
            "Reduced page load time by 41.9% by replacing PHP/jQuery with React, enhancing scalability and SEO.",
            "Lowered API overhead by 34% by implementing caching and optimizing Redux-based data fetching.",
            "Decreased JavaScript execution time by 35.8%, implementing TypeScript and stricter linting.",
            "Optimized frontend performance by reducing the bundle size from 1.35MB to 412KB, improving load speed by 3.6x with lazy loading",
            "Built a Puppeteer‑ based performance monitoring framework to automate audits and boost team efficiency.",
            "Developed testing infrastructure and integrated unit, snapshot, and E2E tests into CI/CD, boosting coverage to 65%.",
            "Increased cross-browser consistency by 30.1%, refactoring styles with SASS, CSS Modules, and Styled\n" +
            "Components."
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

