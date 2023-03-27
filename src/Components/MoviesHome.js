import { Wrap, WrapItem, Container, Text} from '@chakra-ui/react'
import { useState, useEffect} from "react"
import { CardMovie } from "./CardMovie"
import { Loading } from './Loading'

export const MoviesHome = ({ title, url }) => {

    const [movies, setMovies] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=7c1a3b7f576f57154e113773e6308ceb`)
        .then(res => res.json())
        .then(data => {
            setMovies(data.results)
            setIsLoading(false)})
    }, [url])
   
    return(
        <>
        {isLoading && <Loading />}
        <Container maxW='90%' py='50px' >
            <Text fontSize='4xl' fontWeight='500' as='h2' color='#a9a3d3'>{title}</Text>
     
            <Wrap spacing='3%' mt='5'>
                {movies?.map(movie =>(
                    <WrapItem key={`key-${movie.id}`}>
                        <CardMovie 
                        id={movie.id}
                        title={movie.title}
                        poster_path={movie.poster_path}
                        />
                    </WrapItem>
                ))}
            </Wrap>
           
        </Container>
        </>
    )
}