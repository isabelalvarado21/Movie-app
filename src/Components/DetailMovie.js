import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"

export const DetailMovie = () => {

    const params = useParams()
    const [movie, setMovie] = useState({})
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=7c1a3b7f576f57154e113773e6308ceb`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }, [params.id])

    return(
        
        <div>
            <h1>Detalle</h1>
            <h2>Soy la Pelicula: {movie.title}</h2>
            {/* Falta poner los datos de Trailer y los generos de la pelicula */}
            <p>Descripcion: {movie.overview}</p>
            {/* <p>soy el id: {movie.id}</p> */}
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="poster" />
        </div>
    )
}