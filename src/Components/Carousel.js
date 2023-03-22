import { useState, useEffect} from "react"
import { Box } from "@chakra-ui/react"
import Flickity from 'react-flickity-component'
import '../styles/Carousel.css'
const flickityOptions = {
    autoPlay: 1500,
    wrapAround: true
}

export const Carousel = () => {

    const [cineMovies, setCineMovies] = useState()

    useEffect(()=>{
        // https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=7c1a3b7f576f57154e113773e6308ceb&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => 
            setCineMovies(data.results))
        }, [])
        console.log(cineMovies);

  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
      
    >
        {cineMovies?.slice(0,5).map(movie =>(
            <Box className='carousel-cell' key={movie.id} h='800px' bgImage={`"https://image.tmdb.org/t/p/original/${movie.backdrop_path}"`} bgRepeat='no-repeat'>
            </Box>      
        ))}
      
    </Flickity>
  )
}