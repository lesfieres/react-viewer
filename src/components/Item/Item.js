import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Item = (props) => {
  const { title, author, image_url: imageUrl } = props.item;

  const cardStyle = {
    maxWidth: 500,
    marginBottom: 20,
  };

  const cardMediaStyle = {
    width: 140,
  };

  const cardContentStyle = {
    flex: '1 0',
  };

  const cardActionAreaStyle = {
    display: 'flex',
  };

  return (
    <Card style={cardStyle}>
      <CardActionArea style={cardActionAreaStyle}>
        <CardMedia
          component="img"
          alt={title}
          style={cardMediaStyle}
          image={imageUrl}
          title={title}
        />
        <CardContent style={cardContentStyle}>
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

export default Item;
