import { AppBar, Container, Toolbar, Typography } from '@mui/material';

export default function Footer () {
  return (
    <AppBar position="static" sx={{ width: '100vw', bgcolor:'#638889' , height: '14vh'}}>
    <Container maxWidth="md">
      <Toolbar>
        <Typography variant="body1">
          © {new Date().getFullYear()} Your Website Name. All rights reserved.
        </Typography>
      </Toolbar>
    </Container>
  </AppBar>
  );
}