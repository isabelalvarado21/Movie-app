import { Container, Spinner } from '@chakra-ui/react'

export const Loading = () => {
    
    return( 
    <Container py='50px' centerContent={true}>
        <Spinner
            thickness='6px'
            speed='0.65s'
            emptyColor='gray.200'
            color='black.500'
            size='xl'
        />
    </Container>
    )
   
}