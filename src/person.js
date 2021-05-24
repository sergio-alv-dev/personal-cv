import me from './assets/matri-2.jpg'
// const cvUrl = 'https://github.com/sergio-alv-dev/personal-cv/blob/main/SergioAlvarezCV-2021.pdf'
// const cvUrl = 'https://4html.net/source/SergioAlvarezCV-2021.pdf#viewer.action=download'
// const cvUrl = 'https://4html.net/source/SergioAlvarezCV-2021.pdf'
const cvUrl = 'https://nbviewer.jupyter.org/github/sergio-alv-dev/personal-cv/blob/main/SergioAlvarezCV.pdf'


export const sergio = {
    avatar: me,
    name: 'Sergio Andrés Alvarez Pedreros',
    profession: 'Ingeniero Civil Informático',
    bio: 'Entusiasta de la tecnología y los perritos.',
    address: 'Viña del Mar, Chile.',
    // cv: `https://docs.google.com/viewer?url=${cvUrl}`,
    cv: `${cvUrl}`,
    social: [
      // {name: 'facebook', url: 'https://facebook.com/chascondeapeso/'},
      // {name: 'twitter', url: 'https://twitter.com/'},
      {name: 'github', url: 'https://github.com/sergio-alv-dev'},
      {name: 'linkedin', url: 'https://www.linkedin.com/in/sergioalvarezpedreros'}
    ],
    experience: [
      {
        jobTitle: 'Práctica Profesional 2',
        company: 'SALFA',
        startDate: 'Jan 2019',
        endDate: 'Mar 2019', 
        jobDescription: 'Mi periodo de práctica se basó en el manejo de la plataforma de colaboración empresarial Sharepoint, ahí debí crear un sitio para el Area de informática que sirviera de repositorio de documentos, manejando permisos de usuarios.'},
      {
        jobTitle: 'Práctica Profesional 1', 
        company: 'Canal 13 SPA', 
        startDate: 'Jan 2018', 
        endDate: 'Mar 2018', 
        jobDescription: 'Durante las primeras dos semanas aprendí y realicé trabajos en el area de soporte, para luego pasar al area de desarrollo a realizar pruebas en modulos legacy que pasarían a la nube en OracleCloud.'}
    ],
    education: [
      {
        degree: 'Ingeniería Civil Informática', 
        institution: 'PUCV', 
        startDate: 'Jan 2014', 
        endDate: 'Dec 2020', 
        description: 'Para mi tesis utilicé redes neuronales recurrentes LSTM. Librerías para el manejo y muestra de datos ( Pandas, Numpy, Matplot ), el procesamiento de datos ( TensorFlow, Keras ), y mi favorita, T_tides la cual me entregaba el análisis armónico de la marea. Los datos utilizados fueron los entregados por la Intergovernmental Oceanographic Commission - Sea Level Station Monitoring Facility. Todo esto con el objetivo de predecir los futuros niveles de la marea.'},

      // http://www.ioc-sealevelmonitoring.org/service.php

      
      // https://github.com/killgor/Neuro-Tidal
      // https://github.com/moflaher/ttide_py

      // debo reconocer que no logré resultados excepcionales, pero todo lo que aprendí es invaluable.
      {degree: 'Liceo Eduardo de la Barra', institution: '', startDate: '2006', endDate: '2010', description: 'Enseñanza media'},
    ],
    certificates: [
      // 
      {
        name: 'Scrum Fundamentals', 
        institution:  'SCRUMstudy', 
        date: 'Junio 11, 2019', 
        link: 'https://www.scrumstudy.com/certification/certification-registry',
        description: 'Certificación realizada para obtener una comprensión básica de cómo funciona el marco de Scrum en la entrega de proyectos exitosos.'},
      // 
      { 
        name: 'GitLab Certified Associate',
        institution: 'GitLab',
        date: 'Mayo 14, 2021',
        link: 'https://badgr.com/public/assertions/z4WXu3-uS7uOFGcnfCBcoA',
        description: 'Las personas que obtienen la certificación GitLab Certified Associate pueden explicar qué es GitLab y por qué los equipos lo usan, realizar comandos básicos de Git para ramificación, fusión y trabajo remoto, y aplicar conceptos y habilidades fundamentales usando GitLab dentro del ciclo de vida de DevOps',
      },
      {
        name: 'React: De cero a experto ( Hooks y MERN )',
        institution: 'Udemy', 
        duration : '45 hrs', 
        date: 'Marzo 24, 2021', 
        link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-2c01a7d6-ec61-4e3a-84e9-59d26b102754.jpg?v=1616622486000',
        source: 'https://www.udemy.com/certificate/UC-2c01a7d6-ec61-4e3a-84e9-59d26b102754/',
        description: 'Realizado esencialmente para reforzar el area de pruebas, se estudió el stack MERN, reflejado en aplicaciones que hacen uso del contenedor de estado REDUX, CRUD en firebase y Mongo.' },
        // 
        {
          name: 'React: aplicaciones en tiempo real con Socket.io', 
          duration: '16 hrs', 
          institution:  'Udemy', 
          date: 'Abril 7, 2021',
          link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-3493bdd8-3a1c-4d0c-a80b-eb4d58146b73.jpg?v=1617827044000',
          source: 'https://www.udemy.com/certificate/UC-3493bdd8-3a1c-4d0c-a80b-eb4d58146b73/',
          description: 'Curso realizado para aplicar los conceptos de WEBSOCKET y SOCKET.IO, se realizó CRUD en stack MERN basado en sockets, así como la sincronización de mapas en tiempo real.' },
      // 
    ],
    courses:[
      // 
      {
        name: 'Master en Python 3.x. Aprende de cero a experto con Práctica.', 
        duration: '5 hrs', 
        institution:  'Udemy', 
        description: 'Curso realizado para el uso de DJANGO, fortalecer conceptos de errores y manejo de excepciones así como una revisión a las buenas prácticas.' },
      // 
      {
        name: 'Node: de cero a experto', 
        duration: '12.5 hrs', 
        institution:  'Udemy', 
        description: 'Desde las bases de node, manejo de servicio REST con librerías como EXPRESS, AXIOS, hasta una aplicación de colas y un chat basados en sockets con SOCKET.IO'},
      // 
      {
        name: 'Git GitHub: Curso Control de Versiones', 
        duration: '7 hrs', 
        institution:  'Udemy', 
        description: 'Curso realizado para pulir el manejo de control de versiones, nivel avanzado'},
      // 
      {
        name: 'Docker Curso Intensivo para DevOps y Desarrolladores', 
        duration: '3.5 hrs', 
        institution:  'Udemy',
        description: 'Curso realizado para aprender el pipeline de integración continua en Docker'},
      {
        name: 'Angular: De cero a experto (2021)', 
        duration: '35.5 hrs', 
        institution:  'Udemy',
        description: '' 
      },
      {
        name: 'Redux en Angular con NGRX',
        duration: '12 hrs', 
        institution:  'Udemy', 
        // description: 'Manejo del STORE, EFFECTS, ACTIONS, DEVTOOLS, lazyload, login y buenas prácticas en Angular'
      },
      // 
    ],
    portfolio: [
      // {
      //   name: 'Aplicación de chat',
      //   url: '',
      //   description: 'Esta aplicación permite la comunicación entre personas (actualmente de todo el servidor) desde cualquier parte del mundo. Utiliza SOCKETS para su comunicación'
      // },  
      // {
      //   name: 'Aplicación de Apuntes',
      //   url: 'https://journalapp-react.herokuapp.com/auth/login',
      //   description: 'Esta aplicación permite guardar cualquier tipo de entrada de texto. Realizado bajo el concepto de REDUX y FIRESTORE en FIREBASE. Se utilizó jest para las pruebas de componentes.'
      // },
      {
        name: 'Aplicación de tickets',
        url: ' https://ticketapp-sockets-react.herokuapp.com/ ',
        description: 'Esta aplicación web permite la solicitud de tickets para su posterior atención en distintos escritorios. Utiliza SOCKETS para su comunicación.'
      },
      {
        name: 'Aplicación de Calendario',
        url: 'https://mern-calendar-kll.herokuapp.com/',
        description: 'Esta aplicación permite almacenar eventos en un calendario, realizado en stack MERN. Se utilizó jest para las pruebas de componentes.'
      },

    ],
    skills: [
      // {name: 'HTML5', percentage: '95%'},
      // {name: 'JavaScript', percentage: '75%'},
      // {name: 'PYTHON', percentage: '50%'},
      // {name: 'CSS', percentage: '70%'},
    ],
  };