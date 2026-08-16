import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import "../css/home.css";


const cards = [
    {
        id: 1,
        title: 'Klima Servisi',
        description: 'Klima bakım, onarım ve arıza tespit hizmetleri.',
        link: '/klima-bakimi',
    },
    {
        id: 2,
        title: 'Kombi & Petek',
        description: 'Kombi bakımı, arıza onarımı ve petek temizleme.',
        link: '/kombi-bakimi',
    },
    {
        id: 3,
        title: 'Beyaz Eşya Servisi',
        description: 'Beyaz eşya arıza, onarım ve parça değişimi.',
        link: '/beyaz-esya-tamiri',
    },
];


function SelectActionCard() {

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
            }}
        >

            {cards.map((card) => (

                <Card key={card.id}>

                    <CardActionArea
                        onClick={() => navigate(card.link)}
                        sx={{
                            height: '100%',
                        }}
                    >

                        <CardContent
                            sx={{
                                height: '100%',
                                backgroundColor: '#c5e7e9',
                            }}
                        >

                            <Typography variant="h5" component="div">
                                {card.title}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{ color: 'text.secondary' }}
                            >
                                {card.description}
                            </Typography>

                            <br />

                            <Button
                                color="primary"
                                variant="outlined"
                                sx={{
                                    backgroundColor: "#000",
                                    color: "#fff9f9",
                                    borderColor: '#fff'
                                }}
                            >
                                Detay
                                <ChevronRightIcon />
                            </Button>

                        </CardContent>

                    </CardActionArea>

                </Card>

            ))}

        </Box>
    );
}

export default SelectActionCard;