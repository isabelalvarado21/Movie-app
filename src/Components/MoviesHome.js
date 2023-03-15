
import { useState, useEffect} from "react"
// import { Link } from "react-router-dom"
import CardMovie from "./CardMovie"

export const MoviesHome = ({ title, url }) => {

    const [movies, setMovies] = useState()

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=7c1a3b7f576f57154e113773e6308ceb`)
        .then(res => res.json())
        .then(data => 
            setMovies(data.results))
    }, [url])
   
    return(
        <div>
            <h2>{title}</h2>
                {movies?.map(movie =>(
                    <CardMovie 
                        id={movie.id}
                        title={movie.title}
                        poster_path={movie.poster_path}
                    />
                ))}
        </div>
    
    )
}