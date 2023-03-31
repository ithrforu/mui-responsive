import { FC, useRef, useState } from 'react';
import { Mail, Menu as MenuIcon, Notifications, Pets } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu as MaterialMenu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import { AVATAR_PATH } from '../constants';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 2,
});

const StyledSearch = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '30%',
}));

const Icons = () => (
  <Stack direction="row" gap={2} alignItems="center">
    <Badge badgeContent={4} color="error">
      <Mail />
    </Badge>
    <Badge badgeContent={4} color="error">
      <Notifications />
    </Badge>
  </Stack>
);

const UserBox = () => (
  <Stack
    direction="row"
    alignItems="center"
    gap={1}
    sx={{ display: { xs: 'none', sm: 'flex' } }}
  >
    <Avatar sx={{ width: 30, height: 30 }} src={`${AVATAR_PATH}/cat.jpg`} />
    <Typography>John</Typography>
  </Stack>
);

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const anchorRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <Box>
      <IconButton onClick={handleClick} color="inherit" ref={anchorRef}>
        <MenuIcon />
      </IconButton>
      <MaterialMenu
        anchorEl={anchorRef.current}
        open={isOpen}
        onClose={handleClick}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClick}>Profile</MenuItem>
        <MenuItem onClick={handleClick}>My account</MenuItem>
        <MenuItem onClick={handleClick}>Logout</MenuItem>
      </MaterialMenu>
    </Box>
  );
};

export const Navbar: FC = () => (
  <AppBar position="sticky">
    <StyledToolbar>
      <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
        Simple MUI App
      </Typography>
      <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
      <StyledSearch>
        <InputBase placeholder="Search..." />
      </StyledSearch>
      <Stack direction="row" gap={2}>
        <UserBox />
        <Icons />
        <Menu />
      </Stack>
    </StyledToolbar>
  </AppBar>
);
