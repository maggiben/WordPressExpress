import React from 'react';
import _ from 'lodash';
import htmlparser from 'htmlparser2';

import { browserHistory } from 'react-router';

import moment from 'moment';

import CSSModules from 'react-css-modules';
import styles from './post.scss';
import Shortcodes from '../shortcodes/shortcodes';

@CSSModules(styles, {allowMultiple: true})
class PostDate extends React.Component{

  componentDidMount(){
    const author = this._author;
    const { post_date } = this.props;
  }

  render(){
    const { post_date } = this.props;
    let date = moment(post_date).format('MMM D, YYYY HH:MM a z'); 
    return(
      <span>{date}</span>
    )
  }
}

export default PostDate;
