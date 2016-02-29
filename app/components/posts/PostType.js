import React from 'react';
import _ from 'lodash';
import htmlparser from 'htmlparser2';

import { browserHistory } from 'react-router';

import CSSModules from 'react-css-modules';
import styles from './post.scss';
import Shortcodes from '../shortcodes/shortcodes';

@CSSModules(styles, {allowMultiple: true})
class PostType extends React.Component{

  componentDidMount(){
    const author = this._author;
    const { post_type } = this.props;
  }

  render(){
    const { post_type } = this.props;

    console.log("POPOP: ", this.props.post_type)
    return(
      <h2>{post_type}</h2>
    )
  }
}

export default PostType;
