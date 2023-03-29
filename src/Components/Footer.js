import { Container, HStack, IconButton, Text, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export const Footer = () => {
    
    const link = `https://github.com/isabelalvarado21/Movie-app`
    
    return(
        <>
            <Container maxW="xl" bg='#030015' w='100%' p={12} centerContent >
                <HStack>
                    <Text color='#a9a3d3' >© Movie App - 2023 - Hecho con ❤ por Julieta e Isabel</Text>
                    <Link href={link}>
                        <IconButton ms='5' size='sm' _hover={{background: "#52002c", color: "white"}} icon={<ExternalLinkIcon  boxSize='5' />}/>
                    </Link>                   
                </HStack>
            </Container>
        </>
    )
}