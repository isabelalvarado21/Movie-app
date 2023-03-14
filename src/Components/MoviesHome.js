
import { Link } from "react-router-dom"
import { useState, useEffect} from "react"

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
                    <div key={`key-${movie.id}`}>
                    <Link to={`/detalle/${movie.id}`}>
                        <button >ver detalle</button>
                    </Link>
                    <p >{movie.title}</p>
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="poster" />
                    </div>
                ))}
        </div>
    
    )
}