import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CardMovie = ({id, title, poster_path}) => {
    return(
        <Box sx={{ maxWidth: 220, padding:2 }} key={`key-${id}`}>
            <Card>
                <CardMedia sx={{ objectFit: 'cover', objectPosition: 'center' }}
                    component="img"
                    alt={title}
                    height="auto"
                    image={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                />
                <CardContent>
                    {/* <Link to={`/detalle/${id}`}></Link> */}
                    <Typography variant="subtitle2: 'h2'" component="h3">
                    {title}
                    </Typography>
                </CardContent>
                <CardActions>
                <Link to={`/detalle/${id}`}> <Button variant="contained" size="large" color="secondary">Detalles</Button></Link>
                </CardActions>
                </Card>





            {/* <div key={`key-${id}`}>
                <Link to={`/detalle/${id}`}>
                <button >Detalles</button>
                </Link>
                <p>{title}</p>
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="poster" />
            </div> */}
        </Box>
    )
}

export default CardMovie