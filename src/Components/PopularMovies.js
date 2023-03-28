import { Box, VStack, HStack, Container, IconButton, Text, Wrap, WrapItem} from '@chakra-ui/react'
import {ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
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

export const PopularMovies = ({title, url }) => {
  
        const [movies, setMovies] = useState()
        const { count, setPage, handleClickNext, handleClickPrev} = useCount()
        const [isLoading, setIsLoading] = useState(false)

        useEffect(()=>{
            setIsLoading(true)
            fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=7c1a3b7f576f57154e113773e6308ceb&page=${count}`)
            .then(res => res.json())
            .then(data =>{
                setMovies(data.results)
                setPage(data.total_pages) 
                setIsLoading(false)
            })
        }, [count, setPage, url])
       
        return(
            <div>
                    {isLoading && <Loading />}
                    <Container maxW='80%' py='50px'>
                    <Text fontSize='4xl' fontWeight='600' as='h2' color='#a9a3d3'>{title}</Text>
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