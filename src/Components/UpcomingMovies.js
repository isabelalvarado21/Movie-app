import { Box, VStack, HStack, Container, IconButton, Text, Grid } from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { useState, useEffect} from "react"
import { CardMovie } from "./CardMovie"
import { Loading } from './Loading'

 const useCount = () => {
    const [count, setCount] = useState(1)
    const [page, setPage] =useState()

    const handleClickNext = () => {    
        if (count < page) {
        setCount(count + 1)}
    }
    const handleClickPrev = () => {
        if (count > 1) {
        setCount(count - 1)};
    }
   
  return {
  count,
  page, 
  handleClickNext,
  handleClickPrev,
  setPage,
  }
}

export const UpcomingMovies = ({title, url }) => {
  
        const [movies, setMovies] = useState()
        const { count, setPage, handleClickNext, handleClickPrev} = useCount()
        const [isLoading, setIsLoading] = useState(false)

        useEffect(()=> {
            setIsLoading(true)
            fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=7c1a3b7f576f57154e113773e6308ceb&page=${count}`)
                .then(res => res.json())
                .then(data =>{
                    setMovies(data.results)
                    setPage(data.total_pages)
                    setIsLoading(false) })
        }, [count, setPage, url])
       
        return(

            <>
                {isLoading && <Loading />}
                <Container maxW='90%' py='50px'>
                    <Text fontSize={{base: "24px", md: "30px", lg: "35px"}} fontWeight='600' as='h2' color='#a9a3d3' display={{sm:'block', md:'inline-block'}} textAlign={{sm:'center'}} bgColor='#160b3e9e' px='10' pt='10' borderTopRadius='30px'>{title}</Text>
                    <Grid templateColumns={{sm: "repeat(1, 1fr)",  md: "repeat(2, 1fr)",  lg: "repeat(3, 1fr)",  xl:"repeat(5, 1fr)"}} gap={6} bgColor='#160b3e9e' p='10' borderTopRightRadius={{md:'30px'}} borderBottomRadius='30px'>
                        {movies?.map(movie =>(
                            <Box display='flex' justifyContent='center' key={`key-${movie.id}`}>
                                <CardMovie 
                                id={movie.id}
                                title={movie.title}
                                poster_path={movie.poster_path}
                                />
                            </Box>
                    ))}
                    </Grid>
                </Container>
              
                <Box bg='#030015' w='100%' p={4}> 
                    <VStack>
                        <Container centerContent={true}>
                            <HStack>
                            <IconButton
                                _hover={{background: "#52002c", color: "white"}}
                                icon={<ArrowLeftIcon />}
                                onClick={handleClickPrev}
                                />
                            <Text fontSize='md' fontWeight='bold' color='white'>{count}</Text>
                            <IconButton
                                _hover={{background: "#52002c", color: "white"}}
                                icon={<ArrowRightIcon />}
                                onClick={handleClickNext}
                                /> 
                            </HStack>
                        </Container>
                    </VStack>
                </Box>  
            </>
     )
} 