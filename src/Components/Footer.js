import { Container, VStack,IconButton, Text, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export const Footer = () => {
    
    const link = `https://github.com/isabelalvarado21/Movie-app`
    
    return(
        <>
        <VStack>
            <Container bg='#030015' w='100%' p={12} centerContent >
                <Text color='#a9a3d3' >2023. Movie App.</Text>
                <Text color='#a9a3d3' p='3'>Hecho por Julieta e Isabel.</Text>
            <Link href={link}>
                <IconButton 
                    _hover={{background: "#52002c", color: "white"}}
                    icon={<ExternalLinkIcon  />}/>
            </Link>                   
            </Container>
        </VStack>
        </>
    )
}