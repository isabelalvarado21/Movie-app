import { useState, useEffect} from "react"
import Typography from '@mui/material/Typography';
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
        <section>
            <Typography gutterBottom variant="h4" component="h2">
                    {title}
            </Typography>
            {movies?.map(movie =>(
                <CardMovie 
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                />


                    // <div key={`key-${movie.id}`}>
                    // <Link to={`/detalle/${movie.id}`}>
                    // <button >Detalles</button>
                    // </Link>
                    // <p >{movie.title}</p>
                    // <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="poster" />
                    // </div>
            ))}
        </section>
    )
}