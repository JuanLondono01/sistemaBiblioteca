import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/card.css'

export const BookCardOpen = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component='img'
                alt='Book cover'
                height='140'
                image='/static/images/cards/contemplative-reptile.jpg'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    Moby-Dick
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    Moby Dick​ es una novela del escritor Herman Melville
                    publicada en 1851. Narra la travesía del barco ballenero
                    Pequod, comandado por el capitán Ahab, junto a Ismael y el
                    arponero Queequeg en la obsesiva y autodestructiva
                    persecución de un gran cachalote blanco
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    );
};
