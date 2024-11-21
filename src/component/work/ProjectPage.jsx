import Projects from "./Projects"


export default function ProjectsPage(){
    const projects=[
        {
            name:"Lat's TravelBD",
            image:'/sites/latsTravel.png',
            mobileImage:'/sites/LatsTravelMobile.png',
            description:'This site is about most buetiful places in Bangladesh',
            tools:[' HTML,',' CSS, ',' VenillaJS, ',' BootStrap, ',' NodeJS ',' Express ',' MongoDB ' ],
            visit: 'https://lats-travelbangladesh.onrender.com',
            gitHub: 'https://github.com/asemrashed/latsTravelBD',
        },
        {
            name:"Asem Rashed",
            image:'/sites/portfolio.png',
            mobileImage:'/sites/portfolioMobile.png',
            description:'This is my portfolio',
            tools:['React, ', ' MUI, ', ' CSS, '],
            visit:'http://localhost:5173',
            gitHub:'https://github.com/asemrashed/portfolio', 
        }
    ]
    return(
        <Projects projects={projects}/>
    )
}