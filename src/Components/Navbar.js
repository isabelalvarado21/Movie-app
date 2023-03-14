import { Box, Stack, Button, Input } from '@chakra-ui/react'
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

        <Box bg='lightblue' w='100%' p={4}>
        <Stack direction='row' spacing={4} align='center'>
           <Link to="/">
            <Button colorScheme='teal' variant='ghost'>
                Home
            </Button></Link>
           <Link to="/populares">
            <Button colorScheme='teal' variant='ghost'>
                Populares
            </Button></Link>
           <Link to="/lanzamientos">
            <Button colorScheme='teal' variant='ghost'>
                Próximos Lanzamientos
            </Button></Link>
           <form action="" onSubmit={handleSubmit}>
                <Input onChange={handleChange} width='auto' variant='filled' placeholder='ej. Batman' />
                <Input type='submit' onChange={handleChange} width='auto'/>
            </form>
            </Stack>
        </Box>
    )
}