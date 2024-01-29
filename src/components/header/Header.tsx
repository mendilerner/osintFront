
import { CssBaseline } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';




export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static" sx={{ width: '100vw', bgcolor:'#040404'}}>
        <Toolbar sx={{display: "flex", justifyContent: 'space-between'}}>


          <Typography fontWeight={700} fontSize={30} sx={{textTransform: 'uppercase'}}>
          my app
          </Typography>


        </Toolbar>
      </AppBar>
    </Box>
  );
}