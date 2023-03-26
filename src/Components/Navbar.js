import { Box, Stack, Button, Input, Image } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import "../styles/Navbar.css"


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

        <Box w='100%' p={4} bg='#030015' id='navbar'>
            <Link to="/">
                <Image src='assets/img/logo-movie.png' alt='Dan Abramov' w='150px' />
            </Link>
            <Stack direction='row' spacing={4} align='center' >
                <Link to="/">
                    <Button variant='ghost' color='#a9a3d3' _hover={{background: "#52002c", color: "white"}}>
                        Home
                    </Button></Link>
                <Link to="/populares">
                    <Button colorScheme='teal' variant='ghost' color='#a9a3d3' _hover={{background: "#52002c", color: "white"}}>
                        Populares
                    </Button></Link>
                    
                <Link to="/lanzamientos">
                    <Button colorScheme='teal' variant='ghost' color='#a9a3d3' _hover={{background: "#52002c", color: "white"}}>
                        Próximos Lanzamientos
                    </Button></Link>
                <form action="" onSubmit={handleSubmit}>
                    <Input onChange={handleChange} width='auto' variant='filled' placeholder='ej. Batman' />
                    <Input type='submit' onChange={handleChange} width='auto' color='#a9a3d3' fontWeight='bold' ms='4' _hover={{background: "#ffffff", color: "#030015", fontWeight: 'bold'}}/>
                </form>
            </Stack>
        </Box>
    )
}