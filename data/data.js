const data = {
    name: "Luis Timón Prieto",
    address: "Getafe, Madrid",
    email: "luistp06@gmail.com",
    aboutMe:
      "Desarrollador web + multiplataforma junior, actualmente, formandome en el proyecto Prometeo de la escuela ThePower. Además, estudié el grado superior de mantenimiento electrónico en el centro Río Tormes y trabajo como técnico electrónico desde 2023. Mi ilusión es poder dedicarme a una profesión moderna y que contribuya a los avances tecnológicos. ",
  
    education: {
      degree1: "Grado superior en Mantenimiento Electrónico",
      center1: "CIFP Río Tormes",
      graduationYear1: 2021,
      degree2: "Grado superior en Desarrollo de aplicaciones Multiplataforma",
      center2: "The Power (online)",
      graduationYear2: "-En progreso-",
      relevantCourses: 
      `Master en desarrollo web(online)<br>Curso de especialización en ciberseguridad en entornos de las tecnologías de la operación`
         ,

    },
    workExperience: [
      {
        position: "Técnico electrónico",
        company: "INDRA SISTEMAS S.A",
        startDate: "2023",
        endDate: "Actualidad",
        description:
          "Supervisión y reparación de equipos y sistemas de radioayudas de aeronaves. ",
          date: "2023 - Actualidad",
      },
     
      {
        position: "Prácticas Mantenimiento Electrónico",
        company: "Autoelectrochips S.L",
        startDate: "2021",
        endDate: "2021",
        description:
          "Revisión de circuitos, reparación y soldadura de componentes electrónicos y componentes SMD. Diagnóstico de fallas de ECUs y borrado y escritura de memorias. ",
          date: "2021",
        },
      {
        position: "Peón Multiservicios",
        company: "VERAGUA OCIO ACTIVO DE LA VERA, S.L",
        startDate: "2019",
        endDate: "2021",
        description:
          "Jardineria, limpieza de piscinas y desinfección frente al covid 19.",
        date: "2019 - 2020 - 2021",
      },
     
    
    ],
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Vite",
      "Node.js",
    ],
    projects: [
      {
        title: "E-commerce Website",
        description:
          "Imitación del diseño de la tienda Madridhifi con HTML, CSS, Flex y Grid",
        link: "https://ltproyecto1.netlify.app/#",
        preview:
          "./assets/proyecto1.png",
      },
      {
        title: "Web Photos",
        description:
          "Plataforma de busqueda de fotos, realizada con vite y async/await y obteniendo los resultados de la API Unsplash.",
        link: "https://likepinterest.netlify.app",
        preview:
          "./assets/likepinterest.png",
      },
      {
        title: "Portfolio",
        description:
          "Portfolio personal, diseñado para demostrar mis habilidades como programador y dar a conocer mis proyectos.",
        link: "https://ltpmyportfolio.netlify.app/#",
        preview:
          "./assets/proyecto3.png",
      },
    ],
  };
  
  export default data;
  