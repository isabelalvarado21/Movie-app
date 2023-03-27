import { Wrap, WrapItem, Container } from '@chakra-ui/react'
import { Box, VStack, HStack, IconButton, Text} from '@chakra-ui/react'
import {ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import {  useParams } from "react-router-dom"
import { useState, useEffect } from "react"
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

export const SearchMovie = () => {
    
    const params = useParams()
    const [movies, setMovies] = useState([])
    const { count, setPage, handleClickNext, handleClickPrev} = useCount()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=7c1a3b7f576f57154e113773e6308ceb&query=${params.query}&page=${count}`)
        .then(res=> res.json())
        .then(data => { 
            setMovies(data.results)
            setPage(data.total_pages)
            setIsLoading(false)
        })
    }, [params.query, count, setPage])

    return(
        <div >
           {isLoading && <Loading />}
            <Container maxW='80%' py='50px'>
            <Wrap spacing='30px' mt='5'>
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
             
            <Box bg='#030015' w='100%' p={4}> 
                    <VStack>
                    <Container centerContent={true}>
                    <HStack>
                    <IconButton
                        _hover={{background: "#52002c", color: "white"}}
                        icon={<ArrowLeftIcon />}
                        onClick={handleClickPrev}
                        />
                    <Text fontSize='md' fontWeight='bold' color='white'>
                        {count}
                    </Text>
                    <IconButton
                        _hover={{background: "#52002c", color: "white"}}
                        icon={<ArrowRightIcon />}
                        onClick={handleClickNext}

                        /> 
                    </HStack>
                    </Container>
                    </VStack>
                </Box>
        </div>
    )
}