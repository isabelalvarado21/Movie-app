import { Wrap, WrapItem, Container} from '@chakra-ui/react'
import {  useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { CardMovie } from "./CardMovie"

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
            
            <Container maxW='80%' py='50px'>
            <Wrap spacing='30px' mt='5'>
                {movies?.map(movie =>(
                    <WrapItem>
                        <CardMovie 
                        id={movie.id}
                        title={movie.title}
                        poster_path={movie.poster_path}
                        />
                    </WrapItem>
                ))}
            </Wrap>
            </Container>
            <Footer />
        </div>
    )
}