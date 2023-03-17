import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './Components/Home';
import { PopularMovies } from './Components/PopularMovies';
import { UpcomingMovies } from './Components/UpcomingMovies';
import { SearchMovie } from './Components/SearchMovie';
import { DetailMovie } from './Components/DetailMovie';
import { Error } from './Components/Error';

export const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/populares" element={<PopularMovies title="Populares" url="popular"/>}/>
          <Route path="/lanzamientos" element={<UpcomingMovies title="Proximos Lanzamientos" url="upcoming" />}/>
          <Route path="/peliculas/:query" element={<SearchMovie />}/>
          <Route path="/detalle/:id" element={<DetailMovie />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

