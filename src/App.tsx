import { FC } from 'react';
import { Box, Container, Stack } from '@mui/material';
import { ThemeProvider } from 'theme/ThemeProvider';
import { Feed, Navbar, Rightbar, Sidebar } from './components';

const App: FC = () => (
  <ThemeProvider>
    <Box bgcolor="background.default" color="text.primary">
      <Container sx={{ p: (theme) => theme.spacing(0, 2) }}>
        <Navbar />
        <Stack direction="row" spacing={2}>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Container>
    </Box>
  </ThemeProvider>
);

export default App;
