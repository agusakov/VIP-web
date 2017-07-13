import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import { Link } from 'react-router-dom';


const style = {
  card: {
    paddingBottom: "10px",
    margin: "10px",
    height: "500px"
  },
  cardMedia:{
    height: "100px"
  },
  cardHeader: {
    textAlign : 'left',
    fontSize: '1.2em',
    maxHeight: "100px"
  },
  cardText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: "330px"
  }
  
}

class AnnouncementCard extends Component {
    constructor(props) {
      super(props);

    }
    render () {
      return (
        <MuiThemeProvider>
          <div className="col-md-6" style={{marginBottom:"10px"}}>
          <Card style={style.card}>
            <CardHeader
              title={<h4>{this.props.announcement.title}</h4>}
              subtitle={new Date(this.props.announcement.date).toDateString()}
              actAsExpander={false}
              showExpandableButton={false}
              titleStyle = {style.cardHeader}
            />
            <CardText expandable={false} style={style.cardText}>
              <ReactMarkdown source={this.props.announcement.content} />
            </CardText>
            <Link to={`announcement/${this.props.fbkey}`}>
              <CardActions>
                <FlatButton label="Read more" />
              </CardActions>
            </Link>
          </Card>
          </div>
        </MuiThemeProvider>
      )
    }
}
  
AnnouncementCard.propTypes = {
  announcement : PropTypes.shape({
    content : PropTypes.string,
    date: PropTypes.number
  })
}

export default AnnouncementCard;