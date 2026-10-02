const projects = [
  {
    number: '01',
    title: 'Addis Eats',
    description:
      'A restaurant ordering interface built around reusable React patterns, shared state, persistent cart data, and API-style data handling.',
    technologies: ['React', 'JavaScript', 'CSS'],
    type: 'Web Application',
    github: 'https://github.com/HaniSemayat/Addis-Eats',
    live: '',
    featured: true,

    visuals: {
      light: [
        {
          src: '/images/projects/addis-eats-dark.png',
          alt: 'Addis Eats restaurant interface',
        },
        {
          src: '/images/projects/addis-eats-dark-menu.png',
          alt: 'Addis Eats menu interface',
        },
      ],

      dark: [
        {
          src: '/images/projects/addis-eats-light.png',
          alt: 'Addis Eats restaurant interface in dark theme',
        },
        {
          src: '/images/projects/addis-eats-light-menu.png',
          alt: 'Addis Eats menu interface in dark theme',
        },
      ],
    },
  },

  {
    number: '02',
    title: 'WasteFlow',
    description:
      'A structured waste-management web application for reporting and managing waste-related information, with reusable components, routing, application state, validation, filtering, and local storage.',
    technologies: [
      'React',
      'JavaScript',
      'React Router',
      'Application State',
      'Local Storage',
      'Git/GitHub',
    ],
    type: 'Web Application',
    github: 'https://github.com/HaniSemayat/wasteflow',
    live: '',
    featured: false,

    visuals: {
      light: [
        {
          src: '/images/projects/wasteflow.png',
          alt: 'WasteFlow waste management application',
        },
        {
          src: '/images/projects/wasteflow-reports.png',
          alt: 'WasteFlow reports interface',
        },
      ],
    },
  },

  {
    number: '03',
    title: 'Job Application Tracker',
    description:
      'A browser-based tool for organizing job applications, tracking their status, and viewing application progress through interactive filtering, searching, sorting, editing, and persistent local data.',
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'Local Storage',
    ],
    type: 'Productivity Tool',
    github: 'https://github.com/HaniSemayat/mini-projects/tree/main/03-job-application-tracker',
    live: '',
    featured: false,

    visuals: {
      light: [
        {
          src: '/images/projects/job-tracker.png',
          alt: 'Job Application Tracker interface',
        },
      ],
    },
  },

  {
    number: '04',
    title: 'Birr Watch',
    description:
      'A currency monitoring interface that consumes exchange-rate data and presents watched currencies against the Ethiopian Birr.',
    technologies: ['JavaScript', 'REST API', 'CSS'],
    type: 'API Project',
    github: 'https://github.com/HaniSemayat/IBT-Software-Development-Class-2026/tree/main/Module-02-HTML-CSS-JavaScript/day-22/birr_watch',
    live: '',
    featured: false,

    visuals: {
      light: [
        {
          src: '/images/projects/birr-watch.jpg',
          alt: 'Birr Watch currency monitoring interface',
        },
      ],
    },
  },
]

export default projects
