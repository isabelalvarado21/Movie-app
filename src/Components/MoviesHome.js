import { Box, Grid, Container, Text } from '@chakra-ui/react'
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
        <Container maxW='90%' py='50px'>
            <Text fontSize={{base: "24px", md: "30px", lg: "35px"}} fontWeight='500' as='h2' color='#a9a3d3' display={{sm:'block', md:'inline-block'}} textAlign={{sm:'center'}} bgColor='#160b3e9e' px='10' pt='10' borderTopRadius='30px'>{title}</Text>
            <Grid templateColumns={{sm: "repeat(1, 1fr)",  md: "repeat(2, 1fr)",  lg: "repeat(3, 1fr)",  xl: "repeat(5, 1fr)"}} gap={6} bgColor='#160b3e9e' p='10' borderTopRightRadius={{md:'30px'}} borderBottomRadius='30px'>

                {movies?.map(movie => (   
                   <Box key={`key-${movie.id}`} w='100%' display='flex' justifyContent='center'>
                        <CardMovie  
                        id={movie.id}
                        title={movie.title}
                        poster_path={movie.poster_path}
                        />
                    </Box>
                ))
            }
           </Grid>
        </Container>
        </>
    )
}