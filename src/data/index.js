
export const NAV_DATA = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
];

export const USER_INFO = {
    'header': "Hi, I'm Christian",
    'description': "I'm Frontend / Backend Developer with 1 year experience. Reach out if you want to learn more!"
}

export const ABOUT = {
    'data1': {
        'title': 'Frontend Developer',
        'Description': "I'm a frontend Developer with experience in building and optimizing websites and mobile app",
    },
    'data2':{
        'title': 'Backend Developer',
        'Description': "I'm a Backend Developer with experience in creating REST API, optimizing queries and CRUD",
    },
    'data3':{
        'title': 'Mobile/Web Developer',
        'Description': "I'm a mobile/web Developer with experience in creating e-commerce application and others.",
    }
}

export const EXPERIENCE = [
    {
        'id': 1,
        'role': 'Full-stack Developer',
        'company': 'Wonita Oriental OPC',
        'startDate': 'December, 2023',
        'endDate': 'December, 2024',
        'compLogo': '/assets/experience/wonita.svg',
        'experience': [
            'Works on e-commerce application, web and mobile',
            'Update and debug features',
            'Created REST API',
            'Deployed Mobile app on Playstore and Appstore',
            'Created main feature of the e-commerce application, such as Chat, Listing, etc.'
        ]
    },
    {
        'id': 2,
        'role': 'QA Engineer',
        'company': 'Denso Philippines',
        'startDate': 'December, 2022',
        'endDate': 'June, 2023',
        'compLogo': '/assets/experience/denso.svg',
        'experience': [
            'Conduct investigation and analysis of  product quality',
            'Lead cross functional meetings to discuss investigation processes and data gathering strategies',
        ]
    },
]

export const SKILLS = [
    {
        'id': 0,
        'skill': 'Next JS',
        'skillImage': '/assets/experience/NextJs.svg',
    },
    {
        'id': 0.1,
        'skill': 'HTML',
        'skillImage': '/assets/experience/html.svg',
    },
    {   
        'id': 0.2,
        'skill': 'CSS',
        'skillImage': '/assets/experience/CssSvg.svg',
    },
    {
        'id': 0.3,
        'skill': 'React JS',
        'skillImage': '/assets/experience/ReactSvg.svg',
    },
    {
        'id': 0.4,
        'skill': 'React Native',
        'skillImage': '/assets/experience/ReactSvg.svg',
    },
    {
        'id': 0.5,
        'skill': 'Laravel',
        'skillImage': '/assets/experience/LaravelSvg.svg',
    },
    {
        'id': 0.3,
        'skill': 'SQL',
        'skillImage': '/assets/experience/SqlSvg.svg',
    },
]

export const PROJECTS = [
    {
        'title': 'Buudl App',
        'description': 'E-commerce application that downloadable in both ios and android',
        'image': '/assets/project/buudlApp.png',
        'tools': [
            'React',
            'React Native',
            'Laravel'
        ],
        'link': 'https://play.google.com/store/apps/details?id=com.wonita.buudl'
    },
    {
        'title': 'Buudl Web',
        'description': 'E-commerce web application',
        'image': '/assets/project/buudlWeb.png',
        'tools': [
            'Next Js',
            'React',
            'Laravel'
        ],
        'link': 'https://buudl.com/'
    },
    {
        'title': 'Coffee Shop Website',
        'description': 'Web application that is fully responsive ',
        'image': '/assets/project/coffeeWeb.png',
        'tools':[
            'HTML',
            'CSS',
            'JS'
        ],
        'link': 'https://awakencoffeelab.netlify.app/'
    }
]

export const CONTACT = [
    {
        icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
        title: "Phone",
        content: "+639 38** *****",
        href: "tel:+639383244305"
      },
      {
        icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
        title: "Email",
        content: "christian.ardenya@gmail.com",
        href: "mailto:christian.ardenya@gmail.com"
      },
      {
        icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
        title: "Address",
        content: "Cabuyao City, Laguna, Philippines",
        href: "https://maps.google.com"
      }
]