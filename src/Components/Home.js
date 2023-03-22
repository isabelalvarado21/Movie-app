import { Navbar } from "./Navbar"
import { MoviesHome } from "./MoviesHome"
import { Footer } from "./Footer"
import { Carousel } from "./Carousel"

export const Home = () => {

    return(
        
        <div>
            <Navbar />
            <Carousel />
            <MoviesHome title="Populares" url="popular"/>
            <MoviesHome title="Mejor Puntuadas" url="top_rated"/>
            <Footer />
        </div>
    )
}