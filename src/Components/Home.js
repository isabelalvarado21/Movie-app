import { MoviesHome } from "./MoviesHome"
import { Carousel } from "./Carousel"

export const Home = () => {

    return(
        <div>
            <Carousel />
            <MoviesHome title="Populares" url="popular"/>
            <MoviesHome title="Mejor Puntuadas" url="top_rated"/>
        </div>
    )
}