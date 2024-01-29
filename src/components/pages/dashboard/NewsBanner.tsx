import React from 'react';
import { Card, CardContent, Typography, Link,  Stack } from '@mui/material';
import { Newsinterface } from '../../../interfaces/newsInterface';
import CloseIcon from '@mui/icons-material/Close';


// const useStyles = makeStyles((theme) => ({
//   card: {
//     background: theme.palette.primary.main,
//     color: theme.palette.primary.contrastText,
//     padding: theme.spacing(2),
//   },
// }));
interface Tprops {
  news: Newsinterface
  hidePopup: () => void
}
const NewsBanner = ({news, hidePopup} : Tprops) => {
  // const classes = useStyles();

  return (
    <Card sx={{width: "28vw"}}>
      <CardContent>
      <Stack spacing={2}>
      <CloseIcon onClick={hidePopup} sx={{':hover': {background: '#D3D3D3'}}}>hide</CloseIcon>
      <Typography variant="h6">NEWS: </Typography>
      <Typography variant="h5">{news.snippet}</Typography>
        {/* <Typography variant="h6">{news.body}</Typography> */}
        <Typography variant="h6">{new Date (news.time).toLocaleString()}</Typography>
        <Typography variant="h6">Location: {news.literalLocation.join(', ')}</Typography>
        <Typography variant="h6">Rating: {news.rating}</Typography>
        <Link href={news.link} target="_blank" rel="noopener noreferrer">
          Read more
        </Link>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default NewsBanner;
