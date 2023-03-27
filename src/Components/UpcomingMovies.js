import { Box, VStack, HStack, Container, IconButton, Text, Wrap, WrapItem} from '@chakra-ui/react'
import {ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { useState, useEffect} from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { CardMovie } from "./CardMovie"

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

        useEffect(()=> {
            fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=7c1a3b7f576f57154e113773e6308ceb&page=${count}`)
            .then(res => res.json())
            .then(data =>{
                setMovies(data.results)
                setPage(data.total_pages) })
        }, [count, setPage, url])
       
 
        return(

            <div>
            <Navbar />
                <div>
                <Container maxW='80%' py='50px'>
                <Text fontSize='4xl' fontWeight='600' as='h2'>{title}</Text>
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
              
                <Box bg='lightblue' w='100%' p={4}> 
                    <VStack>
                    <Container centerContent={true}>
                    <HStack>
                    <IconButton
                        colorScheme='teal'
                        icon={<ArrowLeftIcon />}
                        onClick={handleClickPrev}
                        />
                    <Text fontSize='md' fontWeight='bold'>
                        {count}
                    </Text>
                    <IconButton
                        colorScheme='teal'
                        icon={<ArrowRightIcon />}
                        onClick={handleClickNext}

                        /> 
                    </HStack>
                    </Container>
                    </VStack>
                </Box>
                
                </div>
                <Footer />
            </div>
     )
} 