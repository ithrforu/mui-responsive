import { FC } from 'react';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import { AVATAR_PATH, CARD_PATH } from '../constants';

type Cards = {
  id: number;
  username: string;
  avatarSrc: string;
  title: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  text: string;
}[];

const cards: Cards = [
  {
    id: 0,
    username: 'SuperUser1337',
    avatarSrc: `${AVATAR_PATH}/meme-frog.jpg`,
    title: 'Lizard',
    date: 'May 30, 2022',
    imageSrc: `${CARD_PATH}/reptile.jpg`,
    imageAlt: 'Green lizard',
    text: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    id: 1,
    username: 'Anonymous228',
    avatarSrc: `${AVATAR_PATH}/anon.jpg`,
    title: 'Shrimp and Chorizo Paella',
    date: 'September 14, 2021',
    imageSrc: `${CARD_PATH}/paella.jpg`,
    imageAlt: 'Paella dish',
    text: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
  },
  {
    id: 2,
    username: 'SuperUser1337',
    avatarSrc: `${AVATAR_PATH}/meme-frog.jpg`,
    title: 'Lizard',
    date: 'May 30, 2022',
    imageSrc: `${CARD_PATH}/reptile.jpg`,
    imageAlt: 'Green lizard',
    text: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
];

export const Feed: FC = () => {
  return (
    <Box component="main" flex={4} p={1}>
      {cards.map((card) => (
        <Card key={card.id} component="section" sx={{ m: (theme) => theme.spacing(3, 0) }}>
          <CardHeader
            avatar={<Avatar src={card.avatarSrc} title={card.username} />}
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title={card.title}
            subheader={card.date}
          />
          <CardMedia component="img" height="194" image={card.imageSrc} alt={card.imageAlt} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {card.text}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: 'red' }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
