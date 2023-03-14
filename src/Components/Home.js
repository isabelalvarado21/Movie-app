import { Navbar } from "./Navbar"
import { MoviesHome } from "./MoviesHome"
import { Footer } from "./Footer"

export const Home = () => {

    return(
        
        <div>
            <Navbar />
            <MoviesHome title="Populares" url="popular"/>
            <MoviesHome title="Mejor Puntuadas" url="top_rated"/>
            <Footer />
        </div>
    )
}