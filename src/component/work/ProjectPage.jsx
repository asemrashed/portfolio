import Projects from "./Projects"


export default function ProjectsPage(){
    const projects=[
        {
            name:"Restaurant Landing page",
            image:'/sites/restaurantPc.png',
            mobileImage:'/sites/restaurantMbl.png',
            description:'A responsive restaurant landing page showcasing the menu and ambiance, with review and reservation features.',
            role:'Sole developer, managing design, front-end development, and deployment.',
            tools:['React + vite, ', ' Material UI'],
            achievements: 'Built a responsive restaurant landing page, overcoming challenges and ensuring a pixel-perfect design.',
            visit:'https://asemrashed.github.io/restaurant/',
            gitHub:'https://github.com/asemrashed/restaurant', 
        },
        {
            name:"Portfolio",
            image:'/sites/portfolio.png',
            mobileImage:'/sites/portfolioMobile.png',
            description:'My portfolio, where I showcase my skills, projects, and expertise.',
            role:'Sole developer, managing design, front-end development, and deployment.',
            tools:['React, ', ' Material UI, ', ' CSS, ','& EmailJs.'],
            achievements: 'Enhanced portfolio accessibility and responsiveness to improve user experience.',
            visit:'https://asemrashed.pages.dev',
            gitHub:'https://github.com/asemrashed/portfolio', 
        },
        {
            name:"Let's TravelBD",
            image:'/sites/latsTravel.png',
            mobileImage:'/sites/LatsTravelMobile.png',
            description:"A platform to explore, add, edit, and review Bangladesh's tourist spots with an interactive map.",
            role: 'Sole developer, handling all front-end, back-end, and security aspects.',
            tools:[' Ejs,',' CSS, ',' VenillaJS, ',' BootStrap, ',' NodeJS, ',' Express, ','& MongoDB. ' ],
            achievements: 'Successfully built and deployed a secure, responsive website to streamline user interaction with popular tourist locations.',
            visit: 'https://lats-travelbangladesh.onrender.com',
            gitHub: 'https://github.com/asemrashed/latsTravelBD',
        }
    ]
    return(
        <Projects projects={projects}/>
    )
}