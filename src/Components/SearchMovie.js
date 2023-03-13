import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Navbar } from "./Navbar"

export const SearchMovie = () => {
    
    const params = useParams()
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=7c1a3b7f576f57154e113773e6308ceb&query=${params.query}`)
        .then(res=> res.json())
        .then(data => setMovies(data.results))
    }, [params.query])

    return(
        <div >
            <Navbar />
                {movies?.map(movie =>(
                    <div key={`key-${movie.id}`}>
                        <Link to={`/detalle/${movie.id}`}>
                            <button >ver detalle</button>
                        </Link>
                    <p>{movie.title}</p>
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="poster" />
                    </div>
                ))}
        </div>
    )
}