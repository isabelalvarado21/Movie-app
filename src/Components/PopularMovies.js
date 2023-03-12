import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { Navbar } from "./Navbar"

export const PopularMovies = ({title, url }) => {
  
        const [movies, setMovies] = useState()
        const [count, setCount] = useState(1)

        useEffect(()=>{
            fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=7c1a3b7f576f57154e113773e6308ceb&page=${count}`)
            .then(res => res.json())
            .then(data => 
                setMovies(data.results))
        }, [url, count])

        const handleClickNext = () => {
            setCount(count + 1);
        };
        
        const handleClickPrev = () => {
            if (count >1) {
                setCount(count - 1)};
        }
       
        return(

            <div>
                <Navbar />
                <div>
                    <h2>{title}</h2>
                        {movies?.map(movie =>(
                            <div key={`key-${movie.id}`}>
                            <Link to={`/detalle/${movie.id}`}>
                                 <button >Detalle</button>
                            </Link>
                            <p>{movie.title}</p>
                            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="poster" />
                            </div>
                        ))}
              
                    <button onClick={handleClickNext}>siguente</button>
                     <p>{count}</p>
                    <button onClick={handleClickPrev}>atras</button>
                </div>
            </div>
     )
}