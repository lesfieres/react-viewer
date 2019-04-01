import React from 'react'; // eslint-disable-line no-unused-vars, prop-types
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 500,
    marginBottom: 20,
  },
  cardMedia: {
    width: 140,
  },
  cardContent: {
    flex: '1 0',
  },
  cardActionArea: {
    display: 'flex',
  },
};

const Item = (props) => {
  const { title, author, image_url: imageUrl } = props.item;
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardActionArea}>
        <CardMedia
          component="img"
          alt={title}
          className={classes.cardMedia}
          image={imageUrl}
          title={title}
        />
        <CardContent className={classes.cardContent}>
          <Typography align="left" gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography align="left" component="p">
            {author.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);
