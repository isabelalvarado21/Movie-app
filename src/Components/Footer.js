import { Box, Container, VStack, HStack, IconButton } from '@chakra-ui/react'
import {EmailIcon, InfoIcon } from '@chakra-ui/icons'

export const Footer = () => {
    
    return(
        <Box bg='lightblue' w='100%' p={4}>
            <VStack>
                <Container centerContent={true}>
                    2023. Movie App, todos los derechos reservados
                </Container>
                <Container centerContent={true}>
                    <HStack>
                        <IconButton
                        colorScheme='teal'
                        icon={<EmailIcon />}
                        />
                        <IconButton
                        colorScheme='teal'
                        icon={<InfoIcon />}
                        />
                    </HStack>
                </Container>
    
            </VStack>
            
        </Box>
    )
}