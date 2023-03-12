import { Link } from 'react-router-dom'

export const Navbar = () => {
   
    return(

        <div>
           <Link to="/"><button> Home </button></Link>
           <Link to="/populares"><button> Populares </button></Link>
           <Link to="/lanzamientos"><button> Proximos Lanzamientos </button></Link>
           <Link to="/buscador/:query"><button> Buscador </button></Link>
        </div>
    )
}