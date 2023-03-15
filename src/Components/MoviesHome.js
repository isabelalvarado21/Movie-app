import { useState, useEffect} from "react"
import CardMovie from "./CardMovie"
import { Wrap, WrapItem, Container, Text } from '@chakra-ui/react'

export const MoviesHome = ({ title, url }) => {

    const [movies, setMovies] = useState()

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=7c1a3b7f576f57154e113773e6308ceb`)
        .then(res => res.json())
        .then(data => 
            setMovies(data.results))
    }, [url])
   
    return(
        <Container maxW='80%' py='50px'>
            <Text fontSize='4xl' fontWeight='600' as='h2'>{title}</Text>
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
    )
}