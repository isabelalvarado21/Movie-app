import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Navbar } from './Navbar'

export const SearchMovies = () => {

    const [valueInput, setValueInput] = useState("")
    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams({
        query: ""
    })

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=7c1a3b7f576f57154e113773e6308ceb&query=${searchParams.get("query")}`)
        .then(res => res.json())
        .then(data => {
            setMovies(data.results)
        })

    }, [searchParams])
    
    const handleChange = (e) => {
        setValueInput(e.target.value)
    }
    const handleClick = (e) => {
        setSearchParams({
            query: valueInput
        })
    }

    return(

        <div>
            <Navbar />
            <div>
                <input 
                    type="text" 
                    onChange={handleChange}
                    value={valueInput}/>
                    <button onClick={handleClick}>Buscar</button>
            </div>
            
            {movies?.map(movie =>(
                <div key={`key-${movie.id}`}>
                    <Link to={`/detalle/${movie.id}`}>
                        <button>Detalle</button>
                    </Link>
                <p>{movie.title}</p>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="poster" />
                </div>
                ))}
        </div>
    )
}