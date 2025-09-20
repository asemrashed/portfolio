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
            gitHub: 'https://github.com/asemrashed', 
            projectType:'Full-stack',
        },
        {
            name:"Restaurant",
            image:'/sites/restaurantPc.png',
            mobileImage:'/sites/restaurantMbl.png',
            description:'A responsive restaurant landing page showcasing the menu and ambiance, with review and reservation features.',
            role:'Sole developer, managing design, front-end development, and deployment.',
            tools:['React,', ' vite ', ' & Material UI'],
            achievements: 'Built a responsive restaurant landing page, overcoming challenges and ensuring a pixel-perfect design.',
            visit:'https://asemrashed.github.io/restaurant/',
            gitHub:'https://github.com/asemrashed/restaurant', 
            projectType:'Frontend',
        },
        {
            name:"Travel BANGLADESH",
            image:'/sites/travelBD.png',
            mobileImage:'/sites/travelBDmobile.png',
            description:"A platform to explore, add, edit, and review Bangladesh's tourist spots with an interactive map.",
            role: 'Sole developer, handling all front-end, back-end, and security aspects.',
            tools:[' Ejs,',' CSS, ',' BootStrap, ',' VenillaJS, ',' NodeJS, ',' Express, ','& MongoDB. ' ],
            achievements: 'Successfully built and deployed a secure, responsive website to streamline user interaction with popular tourist locations.',
            visit: 'https://travel-bangladesh-tb.vercel.app/',
            gitHub: 'https://github.com/asemrashed/latsTravelBD',
            projectType:'Full-stack',
        },{
            name:"Green Earth",
            image:'/sites/green-earth.png',
            mobileImage:'/sites/green-earth-mobile.png',
            description:'Green Earth is an eco-friendly website promoting sustainability and environmental awareness with a responsive and modern design.',
            role:'Sole developer, front-end implementation, API integration and deployment.',
            tools:['HTML, ', ' Bootstrap, ', ' DaisyUI, ', ' & Vanilla JS'],
            achievements:'Built a responsive and user-friendly interface to spread environmental awareness while ensuring cross-device compatibility.',
            visit:'https://green-earth-by-asem.netlify.app/',
            gitHub:'https://github.com/asemrashed/Green-Earth',
            projectType:'Frontend',
        },
        {
            name:"Day2Day English",
            image:'/sites/day2daypc.png',
            mobileImage:'/sites/day2dayM.png',
            description:'A responsive, API-powered frontend for interactive English learning with vocabulary and FAQs, built with a clean design and deployed on Netlify.',
            role:'Sole developer, managing Frontend & API integrarion.',
            tools:['HTML, ', 'Tailwind css, ', ' DaisyUI ','& Venilla Js.'],
            achievements: 'Built a responsive English learning app with DOM manipulation and API integration, deployed on Netlify.',
            visit:'https://day2dayenglish.netlify.app/',
            gitHub:'https://github.com/asemrashed/portfolio', 
            projectType:'Frontend',
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
            projectType:'Frontend',
        },
    ]
    return(
        <Projects projects={projects}/>
    )
}