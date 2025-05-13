const projects = [
  {
    title: "Enigma FAQ",
    description:
      "Web-based FAQ app with an admin dashboard and user interface for browsing articles",
    detailDesc:
      "Collaborated within a team to develop a web-based FAQ application consisting of two main modules. The first is a back-office system for administrators, featuring content management tools such as article CRUD (for both published and draft content), admin account management, and chatbot configuration. The second is a user-facing application that displays FAQ articles and provides an interactive chatbot interface.",
    techStack: [
      "React",
      "Tailwind",
      "Vite",
      "Talk JS",
      "Springboot",
      "Groq API",
      "PostgreSQL",
    ],
    link: [],
    image: [
      "/projects/enigmaFaq/1.png",
      "/projects/enigmaFaq/3.png",
      "/projects/enigmaFaq/2.png",
    ],
  },
  {
    title: "Loan API",
    description: "Backend service for loan and customer management.",
    detailDesc:
      "Designed and developed a backend API for a loan management system. The system supports user and role management, customer data handling, and detailed transaction logging. Each loan transaction is linked to installment types, loan types, and return statuses through well-structured relational models. The API features JWT-based authentication and data validation.",
    techStack: ["Springboot", "JPA", "Spring Security", "PostgreSQL", "JWT"],
    link: [
      {
        label: "GitHub",
        url: "https://github.com/dafisatria/loan_app",
        icon: "/icons/github.svg",
      },
      {
        label: "Postman",
        url: "https://documenter.getpostman.com/view/26808814/2sB2jAa7U9",
        icon: "/icons/postman.svg",
      },
    ],
    image: ["/projects/loanApp/2.png", "/projects/loanApp/1.png"],
  },
  {
    title: "Enigma Laundry for Mobile",
    description: "Admin mobile application for a laundry business.",
    detailDesc:
      "Developed a mobile-based admin application for managing a laundry business, consisting of three key modules. The first module allows adding and displaying customer data. The second is dedicated to managing laundry services and products, including creating and viewing service listings. The third module handles transaction processing, covering both input and display of transaction history.",
    techStack: [
      "React Native",
      "Expo",
      "Redux Toolkit",
      "Axios",
      "AsyncStorage",
    ],
    link: [],
    image: [
      "/projects/enigmaLaundryMobile/image1.png",
      "/projects/enigmaLaundryMobile/1.jpeg",
      "/projects/enigmaLaundryMobile/2.jpeg",
      "/projects/enigmaLaundryMobile/3.jpeg",
      "/projects/enigmaLaundryMobile/4.jpeg",
      "/projects/enigmaLaundryMobile/5.jpeg",
      "/projects/enigmaLaundryMobile/6.jpeg",
      "/projects/enigmaLaundryMobile/7.jpeg",
    ],
  },
  {
    title: "Enigma Laundry for Web",
    description: "Admin web application for a laundry business.",
    detailDesc:
      "Developed a web-based admin application for managing a laundry business, consisting of three key modules. The first module allows adding and displaying customer data. The second is dedicated to managing laundry services and products, including creating and viewing service listings. The third module handles transaction processing, covering both input and display of transaction history.",
    techStack: ["React", "Tailwind", "Vite", "React Hook Form", "Zod", "Axios"],
    link: [],
    image: [
      "/projects/enigmaLaundry/1.png",
      "/projects/enigmaLaundry/2.png",
      "/projects/enigmaLaundry/3.png",
      "/projects/enigmaLaundry/4.png",
    ],
  },
  {
    title: "HealthyOne",
    description: "One-stop healthy lifestyle platform.",
    detailDesc:
      "HealthyOne is an all-in-one healthy lifestyle platform developed by PT Inti Utama Solusindo to support the health needs of Indonesians nationwide. The app integrates with national health standards such as INA-CBG and ICD-10, and is supported by a network of over 1,200 clinics and 2,000 doctors.\n\nAs a front-end developer, I was responsible for building reusable UI components using the Flutter framework, focusing on maintaining consistency with the design system and ensuring seamless backend integration. One key challenge in this project was implementing a Backend-driven UI, where widgets are rendered dynamically from JSON. This required extra attention to compatibility and reusability.\n\nBeyond front-end work, I actively contributed to aligning the UI with backend logic, supporting the development of a scalable and efficient application architecture.",
    techStack: ["Django", "Flutter", "PostgreSQL"],
    link: [],

    image: ["/projects/healthyOne/1.png", "/projects/healthyOne/2.png"],
  },
  {
    title: "Ecowave",
    description: "Eco-conscious shopping and education platform.",
    detailDesc:
      "Ecowave is a mobile-first, environmentally-focused platform developed as a graduation project at Alterra Academy by a cross-functional team of 25 participants. The app aims to raise environmental awareness by providing eco-friendly products and educational content.\n\nAs a mobile developer, I was responsible for slicing 5 UI screens based on UI/UX team designs, integrating RESTful APIs from the backend team, and implementing features such as user authentication, product catalog, shopping cart, order processing, and bookmarks. We used Flutter with the BLoC pattern for state management and adopted clean architecture to ensure maintainability and scalability.\n\nIn addition to technical implementation, I actively participated in code reviews and daily Agile ceremonies, gaining valuable experience in collaborative software development and team workflow.",
    techStack: ["Flutter", "React", "Golang", "MySQL"],
    link: [
      {
        label: "GitHub",
        url: "https://github.com/Ecowave-Alterra/ecowave-flutter",
        icon: "/icons/github.svg",
      },
    ],
    image: [
      "/projects/ecowave/1.png",
      "/projects/ecowave/2.png",
      "/projects/ecowave/3.png",
    ],
  },
  {
    title: "Mukmin Pro",
    description:
      "Prayer time reminder and schedule app for Muslims in Indonesia.",
    detailDesc:
      "Mukmin Pro is a mobile application developed as part of a solo mini project at Alterra Academy, designed to fulfill graduation requirements. The app helps users stay updated on daily and monthly Islamic prayer schedules based on their selected location.\n\nKey features include a real-time countdown to the next prayer time and a full monthly prayer schedule based on data retrieved from api.myquran.com. I implemented API integration using the Dio package and managed the application state using the Provider package. The project followed the MVVM architecture, promoting clear separation between UI and business logic for better maintainability and scalability.",
    techStack: ["Flutter", "Provider", "Dio", "MVVM"],
    link: [
      {
        label: "GitHub",
        url: "https://github.com/dafisatria/mukmin_pro_app",
        icon: "/icons/github.svg",
      },
    ],
    image: [
      "/projects/mukminPro/image.png",
      "/projects/mukminPro/1.png",
      "/projects/mukminPro/2.png",
    ],
  },
  {
    title: "My Cash Book",
    description:
      "Offline finance tracker for income, outcome, and cash flow insights.",
    detailDesc:
      "My Cash Book is a mobile finance tracking application developed as part of a certification assessment under the Indonesian Professional Certification Authority. The app allows users to manage personal finances through local login, income and outcome tracking, monthly summaries, and detailed cash flow history.\n\nBuilt using Flutter and SQLite, the application displays financial insights using charts powered by the fl_chart package. The project follows the MVVM architecture, enabling clear separation of concerns between business logic and UI for better maintainability.",
    techStack: ["Flutter", "SQLite", "MVVM"],
    link: [
      {
        label: "GitHub",
        url: "https://github.com/dafisatria/mobile_certification_app",
        icon: "/icons/github.svg",
      },
    ],
    image: [
      "/projects/cashBook/image.png",
      "/projects/cashBook/1.png",
      "/projects/cashBook/2.png",
      "/projects/cashBook/3.png",
      "/projects/cashBook/4.png",
    ],
  },
];

export default projects;
