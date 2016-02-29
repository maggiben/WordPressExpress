import React from 'react';
import _ from 'lodash';
import htmlparser from 'htmlparser2';

import { browserHistory } from 'react-router';

import CSSModules from 'react-css-modules';
import styles from './post.scss';
import Shortcodes from '../shortcodes/shortcodes';

@CSSModules(styles, {allowMultiple: true})
class PostAuthor extends React.Component{

  componentDidMount(){
    const author = this._author;
    const { post_author } = this.props;
  }

  render(){
    const { post_author } = this.props;

    console.log("post_author: ", this.props)

    return(
      <strong>{post_author}</strong>
    )
  }
}

export default PostAuthor;
