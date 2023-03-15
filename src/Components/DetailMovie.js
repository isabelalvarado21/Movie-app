import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"

export const DetailMovie = () => {

    const params = useParams()
    const [movie, setMovie] = useState({})
    const [trailer, setTrailer] = useState([])
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=7c1a3b7f576f57154e113773e6308ceb`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }, [params.id])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=7c1a3b7f576f57154e113773e6308ceb`)
        .then(res => res.json())
        .then(data => setTrailer(data.results[0]))
    }, [params.id])

    return(
        
        <div>
           
            <h1>{movie.title}</h1>
            <p>Descripcion: {movie.overview}</p>
            {movie?.genres?.map((genre) => (
                      <p>{genre.name}</p>
                    ))}
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="poster" />
            <button><a href={`https://www.youtube.com/watch?v=${trailer.key}`}>trailer</a></button>
        </div>
    )
}