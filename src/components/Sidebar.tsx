import { FC } from 'react';
import {
  AccountBox,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
  SvgIconComponent,
} from '@mui/icons-material';
import {
  Box,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import { useThemeContext } from 'ThemeProvider';

type MenuItems = {
  StartIcon: SvgIconComponent;
  href: string;
  text: string;
  title: string;
}[];

const menuItems: MenuItems = [
  {
    StartIcon: Home,
    href: '#home',
    text: 'Homepage',
    title: "App's homepage",
  },
  {
    StartIcon: AccountBox,
    href: '#simple-list',
    text: 'Profile',
    title: 'Checkout and edit your profile',
  },
  {
    StartIcon: Person,
    href: '#friends',
    text: 'Friends',
    title: 'Friends list',
  },
  {
    StartIcon: Group,
    href: '#groups',
    text: 'Groups',
    title: 'Groups list',
  },
  {
    StartIcon: Settings,
    href: '#settings',
    text: 'Settings',
    title: 'App settings',
  },

  {
    StartIcon: Storefront,
    href: '#marketplace',
    text: 'Marketplace',
    title: 'Buy our merch on a marketplace',
  },
];

const ThemeSwitcher = () => {
  const { toggleMode } = useThemeContext();
  return (
    <Switch onChange={(e) => (e.target.checked ? toggleMode('dark') : toggleMode('light'))} />
  );
};

const MenuList: FC<{ items: MenuItems }> = ({ items }) => (
  <List>
    {items.map(({ StartIcon, ...item }) => (
      <ListItem key={item.text} disablePadding>
        <ListItemButton component={Link} href={item.href}>
          <ListItemIcon>
            <StartIcon />
          </ListItemIcon>
          <ListItemText primary={item.text} title={item.title} />
        </ListItemButton>
      </ListItem>
    ))}
    <ListItem>
      <ListItemIcon>
        <ModeNight />
      </ListItemIcon>
      <ThemeSwitcher />
    </ListItem>
  </List>
);

export const Sidebar: FC = () => {
  return (
    <Box
      component="aside"
      minWidth={160}
      sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
    >
      <Box position="fixed">
        <MenuList items={menuItems} />
      </Box>
    </Box>
  );
};
