import { useParams } from "react-router-dom"
import { Card, Image, Container, Text, Stack, CardBody, Heading, CardFooter, Button, Link, Flex } from '@chakra-ui/react'
import { useState,useEffect } from "react"

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
        <Container maxW='100%' minH='80vh' py='70px' bgImage={url} bgRepeat='no-repeat' bgSize="cover"  >
            <Flex align="center" justify="center" >
                <Card 
                    direction={{ base: 'column', sm: 'column', md: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    bg='rgba(0,0,18,0.7)'
                    color='white'
                    w='80%'
                    >
                        <Image 
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '100%', md: '200px' }}
                            src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
                            alt={movie.title}
                        />

                        <Stack>
                            <CardBody>
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
                                <Stack gap='5' direction={["column", "row"]}>
                                    {movie?.genres?.map((genre, index) => (
                                        <Text key={index} textAlign={[ 'center', 'left' ]} py='2' px='3' m='0' as='span' display='inline-block' fontSize='1rem' background="#52002c" borderRadius='3'>{genre.name}</Text>
                                    ))}
                                </Stack>
                            </CardBody>

                            <CardFooter >
                                <Link href={link} w='100%'>
                                    <Button variant='solid' w='100%' borderRadius='3' bg='#000012' border='none' _hover={{background: "#52002c", color: "white"}}>
                                        Trailer
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Stack>
                </Card>
            </Flex>
        </Container>
        </>
    )
   
}