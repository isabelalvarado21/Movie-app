import { Box, Container, VStack, HStack, IconButton } from '@chakra-ui/react'
import { EmailIcon, InfoIcon } from '@chakra-ui/icons'

export const Footer = () => {
    
    return(
        <>
        <Box bg='#030015' w='100%' p={10}>
            <VStack>
                <Container centerContent={true} color='#a9a3d3'>
                    2023. Movie App, todos los derechos reservados.
                </Container>

                <Container centerContent={true}>
                    <HStack>
                        <IconButton
                        _hover={{background: "#52002c", color: "white"}}
                        icon={<EmailIcon  />}
                        />
                        <IconButton
                        _hover={{background: "#52002c", color: "white"}}
                        icon={<InfoIcon  />}
                        />
                    </HStack>
                </Container>    
            </VStack>            
        </Box>
        </>
    )
}