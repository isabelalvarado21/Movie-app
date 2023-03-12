import { Navbar } from "./Navbar"
import { MoviesHome } from "./MoviesHome"

export const Home = () => {

    return(
        
        <div>
            <Navbar />
            <MoviesHome title="Populares" url="popular"/>
            <MoviesHome title="Mejor Puntuadas" url="top_rated"/>
        </div>
    )
}