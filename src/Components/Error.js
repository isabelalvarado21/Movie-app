import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
export const Error = () => {

    return(
        <Alert status='error'>
        <AlertIcon />
        <AlertTitle>404!</AlertTitle>
        <AlertDescription>Page not Found.</AlertDescription>
      </Alert>
    )
}