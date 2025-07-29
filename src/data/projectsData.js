import book from '../img/projects/book.png';
import naruto from '../img/projects/naruto.png';
import restApp from '../img/projects/resting.png';
import summitApp from '../img/projects/summit.png';
import spaceApp from '../img/projects/space.png';
import movieApp from '../img/projects/gomovie.png';
import mathApp from '../img/projects/math_magician.png';
import budgetApp from '../img/projects/transation.png';
import covidApp from '../img/projects/covid.png';
import motoFront from '../img/projects/motoBooking.png';
import motoApi from '../img/projects/motoapi.png';
import motologin from '../img/projects/motologin.png';
import motomobile from '../img/projects/motomobile.png';
import motodesktop from '../img/projects/motorcycle.svg';


const projects = [
  {
    id: 1,
    image: [motoFront,motoApi,motologin,motomobile,motodesktop],
    title: 'Motorcycle Booking FullStack',
    techLanguage: ['React.js', 'Redux', ' RoR', 'Rspec', 'PL/pgSQL'],
    content: [`This app provides an elegant intuitive user interface and experience for booking your favorite Vespa. 
Users can login, browse a list of motorcycles,and view detailed information about specific motorcycles, reserve a motorecycle. 
The add and delete motorcycles actions are for admin users.`,

`The application is fully responsive and offer a seamless experience on both desktop and mobile devices.

The front-end communicates with the back-end API to ensure a cohesive and efficient user experience.`,
`The Backend API serves as the foundation for user authentication, motorcycle management, reservation handling, and related functionalities.
It utilizes PostgreSQL as the database and is designed to be a robust and secure backend system.`],
    link: ['https://motobookingapp.onrender.com', 'https://github.com/Graciano1997/motorcycle_booking_front_end.git','https://github.com/Graciano1997/motorcycle_booking_back_end.git'],
  },
  {
    id: 2,
    image: [budgetApp],
    title: 'Budget App',
    techLanguage: [' RoR', 'Rspec', 'PL/pgSQL'],
    content: [`Budget app is a web application that allows users to keep track of their financial expenses. In each category, users can add purchases.`,
      `On the category page, users can view the total amount of purchase items.`
    ],
    link: ['https://budget-ps5p.onrender.com', 'https://github.com/Graciano1997/budget_app.git'],
  },
  {
    id: 3,
    image: [covidApp],
    title: 'Pandemic Situation',
    techLanguage: ['React.js', 'JEST', 'Redux'],
    content: [`This is a React Web App that reports the 24H coronavirus new cases, recovered and active cases by each Country in All over the world!`,
    `**Everything in Real time, Fetching the data from a provided API**.`],
    link: ['https://todays-pandemic-status-app.onrender.com/', 'https://github.com/Graciano1997/pandemic_react_capstone.git'],
  },
  {
    id: 4,
    image: [restApp],
    title: 'Resting Countries',
    techLanguage: ['React.js', 'Redux'],
    content: [`This is a React Web App that shows the fundamental indispensable information of each country of the worlds including its borders.`],
    link: ['https://rest-countries-api-with-color-theme-switcher-master-ten-topaz.vercel.app/', 'https://github.com/Graciano1997/rest-countries-api-with-color-theme-switcher-master.git'],
  },
  {
    id: 5,
    image: [spaceApp],
    title: 'Space Travelers Hub',
    techLanguage: ['React.js', 'Redux', 'JEST'],
    content: [`This is a React Web App that displays some real rockets and available Missions from a fetched API and you are free to reserve....🚀🚀`],
    link: ['https://space-travelers-hub-sepia.vercel.app/', 'https://github.com/Graciano1997/space_travelers_hub.git'],
  },
  {
    id: 6,
    image: [book],
    title: 'BookStore App',
    techLanguage: ['React.js', 'JEST', 'Redux'],
    content: [`**Bookstore** is a web application designed for manage and Store your books collection! Feel free to use this App 😊🤩😉`],
    link: ['https://book-store-hn32.vercel.app', 'https://github.com/Graciano1997/book_store.git'],
  },
  {
    id: 7,
    image: [mathApp],
    title: 'Math Magicians',
    techLanguage: ['React.js', 'JEST'],
    content: [`**Math_magicians** is a web application designed for mathematics enthusiasts 😍🤩. It is a Single Page App (SPA) that provides users with the ability 
    to perform simple calculations.`,
    `With a sleek design and friendly UI.Offering a very simple and powerfull calculator Enjoy thought-provoking quotes for that extra motivation. Embrace your inner math magician today – let's make math fun!`],
    link: ['https://math-magicians-wh32.onrender.com/', 'https://github.com/Graciano1997/math_magicians'],
  },
  {
    id: 8,
    image: [movieApp],
    title: 'JS Capstone-Go!Moovies',
    techLanguage: ['JS', 'JEST', 'HTML', 'Webpack'],
    content: [`This Web App has an interactive
     list funcionality, here you welcome to write your comments and see your favorite films informations and so much more 😍🤩...`],
    link: ['https://graciano1997.github.io/js_moduleII_capstone/dist/', 'https://github.com/Graciano1997/js_moduleII_capstone'],
  },
  {
    id: 9,
    image: [naruto],
    title: 'Naruto LeadBoard',
    techLanguage: ['CSS', 'HTML', 'Webpack'],
    content: [`This App offer to you  an elegant and simple user interface and experience, here you can see the Naruto fighters most recent Leadborad, feel free to add your best fight score 😍🤩`],
    link: ['https://graciano1997.github.io/leaderboard/dist/', 'https://github.com/Graciano1997/leaderboard.git'],
  },
  {
    id: 10,
    image: [summitApp],
    title: 'Creative Summit 2015',
    techLanguage: ['JS', 'sass', 'HTML'],
    content: [`This is a web page for the Creative Summit 2015, here your can find indispensable information about the Summit program.`],
    link: ['https://graciano1997.github.io/global-summit/', 'https://github.com/Graciano1997/global-summit'],
  },
];

export default projects;
