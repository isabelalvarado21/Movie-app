import '../../node_modules/flickity/css/flickity.css'
import '../styles/Carousel.css'
import { useState, useEffect } from "react"
import { Box, Link } from "@chakra-ui/react"
import Flickity from 'react-flickity-component'

const flickityOptions = {
    autoPlay: 5000,
    wrapAround: true,
    pageDots: true,
    prevNextButtons: true
}

export const Carousel = () => {

    const [cineMovies, setCineMovies] = useState()

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=7c1a3b7f576f57154e113773e6308ceb&language=en-US&page=1`)
          .then(res => res.json())
          .then(data => 
              setCineMovies(data.results))
        }, [])

  return (
    <Flickity
      className={'carousel'}
      elementType={'div'}
      options={flickityOptions}
      disableImagesLoaded={false}
      reloadOnUpdate
      static
    >
        {cineMovies?.slice(0,7).map(movie => (
          <Link href={`/detalle/${movie.id}`} w='100%' bg='red' key={movie.id}>
              <Box className='carousel-cell' bgImage={`"https://image.tmdb.org/t/p/original/${movie.backdrop_path}"`} bgRepeat='no-repeat'>
              <Box w='100%' pt='10' px-10 pb='20' className="info">
                <h1 fontSize='4xl'>{movie.title}</h1>
                <p>{movie.overview}</p>
              </Box>
            </Box>    
          </Link>         
        ))}
    </Flickity>
  )
}