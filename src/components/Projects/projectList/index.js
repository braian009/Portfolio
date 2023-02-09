const projectList = [
  { title: "Music roulette", image: require("../../../assets/thumbnails/music-roulette.png"), description: "Project that consumes the Spotify API. I implemented react-roulette-pro on it, which in combination with some adaptations and complementations (such as the genre selector) met my idea perfectly.", technologies: ['react', 'styled-components', 'react-router', 'react-roulette-pro', 'framer-motion'], codeUrl: "https://github.com/braian009/music-roulette", demoUrl: "https://music-roulette-444.web.app" },
  { title: "B4 garage", image: require("../../../assets/thumbnails/b4-garage.png"), description: "Concept website made around the idea of an abstract garage. It implied exploring a different approach in web design. Due to the visual content of it, maybe it would be a good idea to add animations in the future.", technologies: ['react', 'styled-components', 'react-router'], codeUrl: "https://github.com/braian009/b4-garage", demoUrl: "https://b4-garage.web.app" },
  { title: "SecondSoul honey", image: require("../../../assets/thumbnails/second-soul.png"), description: "Project made with the intention of emulating a website of an abstract business. During its building, several layout techniques were used through css, in addition to the use of the react library 'react-slick'.", technologies: ['react', 'styled-components', 'react-router', 'react-slick'], codeUrl: "https://github.com/braian009/secondsoul-honey", demoUrl: "https://second-soul-444.web.app"},
  { title: "Todo app", image: require("../../../assets/thumbnails/todo-app.png"), description: "Todo app made with a structure mostly thought by myself, it has CRUD functionality, authentication through token and protected routes.", technologies: ['django', 'rest framework', 'react', 'styled-components', 'react-router' ], codeUrl: "", demoUrl: "https://todo-app-444.web.app"},
  { title: "Notes app", image: require("../../../assets/thumbnails/notes-app.png"), description: "Project taken with core functionality already in it. Customized with the addition of authentication system through token, protected routes and css.", technologies: ['django', 'rest framework', 'react', 'styled-components', 'react-router'], codeUrl: "https://github.com/braian009/notes_app", demoUrl: "https://notes-app-444.web.app" },
  { title: "Numbers puzzzle", image: require("../../../assets/thumbnails/numbers-puzzle.png"), description: "Very simple puzzle made with the purpose of taking a complex logic into a reducer and translate that into a dynamic thing, maybe I'll add some ranking system to it.", technologies: ['react', 'styled-components'], codeUrl: "https://github.com/braian009/numbers_puzzle", demoUrl: "https://numbers-puzzle-444.web.app" },
];

export default projectList;
