import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './HeroCard.css'
import {
  useHistory
} from "react-router-dom";

const useStyles = makeStyles({
  media: {
    height: 220
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const { hero } = props
  const history = useHistory()

  const toInfo = (slug) => {
    console.log(slug)
    history.push(`/${slug}`)
  }

  return (
    <Card onClick={() => toInfo(hero.slug)} className="hero-card">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={hero.images.lg}
          title={hero.name}
        />
        <CardContent className="bg-surface card-content">
          <Typography>
            {hero.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}