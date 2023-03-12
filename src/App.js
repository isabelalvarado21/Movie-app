import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './Components/Home';
import { PopularMovies } from './Components/PopularMovies';
import { UpcomingMovies } from './Components/UpcomingMovies';
import { SearchMovies } from './Components/SearchMovie';
import { DetailMovie } from './Components/DetailMovie';



export const App = () => {
  return (

   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/populares" element={<PopularMovies title="Populares" url="popular"/>}/>
        <Route path="/lanzamientos" element={<UpcomingMovies title="Proximos Lanzamientos" url="upcoming" />}/>
        <Route path="/buscador/:query" element={<SearchMovies />}/>
        <Route path="/detalle/:id" element={<DetailMovie />}/>
      
    </Routes>
</BrowserRouter>
  );
}

