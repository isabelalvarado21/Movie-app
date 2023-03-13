import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Navbar = () => {

    const navigate = useNavigate()
    const [valueInput, setValueInput] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/peliculas/${valueInput}`)
    }
    const handleChange = (e) => {
       setValueInput (e.target.value)
    }
   
    return(

        <div>
           <Link to="/"><button> Home </button></Link>
           <Link to="/populares"><button> Populares </button></Link>
           <Link to="/lanzamientos"><button> Proximos Lanzamientos </button></Link>
           <form action="" onSubmit={handleSubmit}>
                <input 
                type="text"
                onChange={handleChange} />

                <input 
                type="submit" 
                value="buscar"/>
            </form>
        </div>
    )
}