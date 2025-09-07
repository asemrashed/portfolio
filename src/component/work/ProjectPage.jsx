import Projects from "./Projects"


export default function ProjectsPage(){
    const projects=[
        {
            name:"E-Auction (paid project)",
            image:'/sites/eAuction.png',
            mobileImage:'/sites/eAuctionMobile.png',
            description:'A platform for online bidding and auctions, showcasing real-time bidding features.',
            role:'Sole developer, handling all front-end, back-end, and security aspects.',
            tools:['NextJS, ', ' Tailwind CSS, ', ' MongoDB, ', ' NodeJS, ', '& Express, '],
            achievements: 'Successfully built and deployed a secure, responsive website to streamline user interaction with popular auction items.',
            visit:'https://e-auction-six.vercel.app/',
            gitHub:'https://github.com/asemrashed', 
        },
        {
            name:"Restaurant",
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
            name:"Travel BANGLADESH",
            image:'/sites/travelBD.png',
            mobileImage:'/sites/travelBDmobile.png',
            description:"A platform to explore, add, edit, and review Bangladesh's tourist spots with an interactive map.",
            role: 'Sole developer, handling all front-end, back-end, and security aspects.',
            tools:[' Ejs,',' CSS, ',' VenillaJS, ',' BootStrap, ',' NodeJS, ',' Express, ','& MongoDB. ' ],
            achievements: 'Successfully built and deployed a secure, responsive website to streamline user interaction with popular tourist locations.',
            visit: 'https://lats-travelbangladesh.onrender.com',
            gitHub: 'https://github.com/asemrashed/latsTravelBD',
        },
        {
            name:"Day2Day English",
            image:'/sites/day2daypc.png',
            mobileImage:'/sites/day2dayM.png',
            description:'A responsive, API-powered frontend for interactive English learning with vocabulary and FAQs, built with a clean design and deployed on Netlify.',
            role:'Sole developer, managing Frontend & API integrarion.',
            tools:['HTML, ', 'Tailwind css, ','& Venilla Js.'],
            achievements: 'Built a responsive English learning app with DOM manipulation and API integration, deployed on Netlify.',
            visit:'https://day2dayenglish.netlify.app/',
            gitHub:'https://github.com/asemrashed/portfolio', 
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
            gitHub:'https://github.com/asemrashed/day2day-English', 
        },
    ]
    return(
        <Projects projects={projects}/>
    )
}