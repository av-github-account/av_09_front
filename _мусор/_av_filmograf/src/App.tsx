import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import MoviePage from './pages/MoviePage';
// import Header from './components/Header';
// import { Box } from '@chakra-ui/react';

// import { Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import FavoritesPage from './pages/FavoritesPage';
// import MoviePage from './pages/MoviePage';
// import Header from './components/Header';
// import { Box } from '@chakra-ui/react';



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
    </Routes>
  );
}







// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// import { Box } from "@chakra-ui/react"
// import { Header } from "./components/Header" // или там, где вы сохранили Header

// function App() {
//   return (
//     <Box>
//       <Header />
//       {/* Остальное содержимое страницы */}
//     </Box>
//   )
// }

// export default App