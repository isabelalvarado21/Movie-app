import { Card, Image, Link, Heading, CardBody, CardFooter, Button} from '@chakra-ui/react'

export const CardMovie = ({id, title, poster_path}) => {
    return (
        <Card maxW='sm' key={`key-${id}`} w='200px' h='410px' boxShadow='md' >
            <CardBody p='0'>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                    alt={title}  
                />
                <Heading size='1rem' as='h2' px='1' py='2'>{title}</Heading>
            </CardBody>
            <CardFooter p='1'>
                <Link href={`/detalle/${id}`} w='100%'>
                    <Button variant='solid' bg='#030015' w='100%' color='white'>
                        Ver detalles
                    </Button>
                </Link>
            </CardFooter>
        </Card>
   
        
    )
}

