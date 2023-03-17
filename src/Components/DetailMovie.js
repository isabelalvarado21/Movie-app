import { useParams } from "react-router-dom"
import { Card, Image, Container, Text, HStack, Stack, CardBody, Heading, CardFooter, Button, Link, Flex } from '@chakra-ui/react'
import { useState,useEffect } from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export const DetailMovie = () => {

    const params = useParams()
    const [movie, setMovie] = useState({})
    const [trailer, setTrailer] = useState([])
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=7c1a3b7f576f57154e113773e6308ceb`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }, [params.id])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=7c1a3b7f576f57154e113773e6308ceb`)
        .then(res => res.json())
        .then(data => setTrailer(data.results[0]))
    }, [params.id])

    const url = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
    const link = `https://www.youtube.com/watch?v=${trailer.key}`

    return(
        <>
        <Navbar /> 
        <Container maxW='80%' py='70px' bgImage={url} bgRepeat='no-repeat' bgSize="cover"  >
            <Flex align="center" justify="center" >
            <Card 
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                bg='rgba(0,0,18,0.8)'
                color='white'
                w='80%'
                >
                    <Image 
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
                        alt={movie.title}
                    />

                    <Stack >
                        <CardBody >
                            <Heading fontSize='2.2rem' mb='4'>{movie.title}</Heading>

                            <Text py='2' fontSize='1.5rem' as='h2'>
                                Descripcion: 
                            </Text>
                            <Text py='2' fontSize='1rem' as='p'>
                                {movie.overview}
                            </Text>
                            <Text py='2' fontSize='1.5rem' as='h2'>
                                Categorias: 
                            </Text>
                            <HStack spacing='24px'>
                                {movie?.genres?.map((genre) => (
                                    <Text py='2' px='3' as='span' display='inline-block' fontSize='1rem' bg='rgba(0,0,86,0.68)'>{genre.name}</Text>
                                ))}
                            </HStack>
                        </CardBody>

                        <CardFooter key={`key-${movie.id}`}>
                            <Link href={link} w='100%' bg='red'>
                                <Button variant='solid' w='100%' bg='#000012' border='none' borderRadius='none'   _hover={{
        background: "rgba(0,0,65,0.68)", color: "white",
        }}>
                                    Trailer
                                </Button>
                            </Link>
                        </CardFooter>
                    </Stack>
                </Card>
                </Flex>
        </Container>
        <Footer />
        </>
    )
   
}