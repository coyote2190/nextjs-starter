import { Metadata } from 'next';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Copyright from '@/components/copyright/copyright';
import Movies from '@/components/movies/movies';
import StyledMainContainer from './app.styled';

export default function Home() {
  return (
    <StyledMainContainer>
      <Typography gutterBottom variant="h1" component="div">
        Start boilerplate
      </Typography>
      <Typography gutterBottom variant="h3" component="div">
        NextJs - TypeScript - Styled - MUI - Redux
      </Typography>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image="/images/demo.jpg" title="demo" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title Card
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam justo justo, tincidunt ac
            enim sed, porttitor porttitor mi. Sed consequat nec dolor ac pretium.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Movies />
      <Copyright />
    </StyledMainContainer>
  );
}

export const metadata: Metadata = {
  title: 'Start boilerplate',
  description: 'NextJs - TypeScript - Styled - MUI - Redux',
  icons: {
    icon: '/favicon.ico'
  }
};
