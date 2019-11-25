import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './HeroCard.css'

const useStyles = makeStyles({
  media: {
    height: 220,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const hero = props.hero

  return (
    <Card className="hero-card">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={hero.images.lg}
          title={hero.name}
        />
        <CardContent className="bg-surface">
          <Typography>
            {hero.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}