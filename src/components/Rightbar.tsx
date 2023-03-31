import { FC, Fragment } from 'react';
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { AVATAR_PATH } from '../constants';

type OnlineFriends = {
  username: string;
  avatarSrc: string;
}[];

type Images = {
  src: string;
  title: string;
}[];

type Conversations = {
  id: number;
  from: string;
  avatarSrc: string;
  title: string;
  to: string;
  text: string;
}[];

const IMAGE_WIDTH: number = 100;

const onlineFriends: OnlineFriends = [
  {
    username: 'Remy Sharp',
    avatarSrc: `${AVATAR_PATH}/remy-sharp.jpg`,
  },
  {
    username: 'Travis Howard',
    avatarSrc: `${AVATAR_PATH}/travis-howard.jpg`,
  },
  {
    username: 'Cindy Baker',
    avatarSrc: `${AVATAR_PATH}/cindy-baker.jpg`,
  },
  {
    username: 'Agnes Walker',
    avatarSrc: `${AVATAR_PATH}/agnes-walker.jpg`,
  },
  {
    username: 'Trevor Henderson',
    avatarSrc: `${AVATAR_PATH}/trevos-henderson.jpg`,
  },
];

const images: Images = [
  {
    src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    src: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
];

const conversations: Conversations = [
  {
    id: 0,
    from: 'Cindy Baker',
    avatarSrc: `${AVATAR_PATH}/cindy-baker.jpg`,
    title: 'Oui Oui',
    to: 'Sandra Adams',
    text: 'Do you have Paris recommendations? Have you ever',
  },
  {
    id: 1,
    from: 'Remy Sharp',
    avatarSrc: `${AVATAR_PATH}/remy-sharp.jpg`,
    title: 'Summer BBQ',
    to: 'to Scott, Alex, Jennifer',
    text: "Wish I could come, but I'm out of town this",
  },
  {
    id: 2,
    from: 'Travis Howard',
    avatarSrc: `${AVATAR_PATH}/travis-howard.jpg`,
    title: 'Brunch this weekend?',
    to: 'Ali Connors',
    text: "I'll be in your neighborhood doing errands this",
  },
];

const shuffleArray = (array: any[]) => array.slice().sort(() => Math.random() - 0.5);

const Title: FC<{ children: string }> = ({ children }) => (
  <Typography variant="h6" fontWeight={100} m={(theme) => theme.spacing(1, 0)}>
    {children}
  </Typography>
);

export const Rightbar: FC = () => {
  return (
    <Box
      component="section"
      flexShrink={1}
      flexGrow={2}
      sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
      position="relative"
    >
      <Box position="fixed" maxWidth={300}>
        <Stack alignItems="flex-start" p={2}>
          <Title>Online friends</Title>
          <AvatarGroup max={4}>
            {shuffleArray(onlineFriends).map((friend) => (
              <Avatar
                key={friend.username}
                alt={`Avatar of ${friend.username}`}
                title={friend.username}
                src={friend.avatarSrc}
                imgProps={{ loading: 'lazy' }}
              />
            ))}
          </AvatarGroup>
          <Title>Latest photos</Title>
          <ImageList
            sx={{ gridTemplateColumns: `repeat(auto-fit, ${IMAGE_WIDTH}px)` }}
            rowHeight={IMAGE_WIDTH}
            gap={5}
          >
            {images.map((image) => (
              <ImageListItem key={image.title}>
                <img
                  src={`${image.src}?w=${IMAGE_WIDTH}&fit=crop&auto=format`}
                  srcSet={`${image.src}?w=${IMAGE_WIDTH}&fit=crop&auto=format&dpr=2 2x`}
                  alt={image.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Title>Latest conversations</Title>
          <List disablePadding>
            {conversations.map((message) => (
              <Fragment key={message.id}>
                <ListItem alignItems="flex-start" disablePadding>
                  <ListItemAvatar>
                    <Avatar alt={message.from} src={message.avatarSrc} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={message.title}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {message.to}
                        </Typography>
                        {` — ${message.text}…`}
                      </>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </Fragment>
            ))}
          </List>
        </Stack>
      </Box>
    </Box>
  );
};
