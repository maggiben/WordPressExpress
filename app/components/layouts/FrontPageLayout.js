import React from 'react';
import Relay from 'react-relay';
import Page from '../pages/page.js';
import PostContent from '../posts/PostContent';
import PostAuthor from '../posts/PostAuthor';
import PostDate from '../posts/PostDate';
import PostType from '../posts/PostType';

class FrontPageLayout extends React.Component{

	render(){
		const { post_title, post_type, post_author, post_date, post_name, post_content, thumbnail} = this.props.viewer.page;
		let bg = {
			backgroundImage: "url('" + thumbnail + "')"
		}

		let heroClass = thumbnail ? "hero_thumbnail" : "hero"

		return (
			<Page>
				<div styleName={heroClass} style={bg}>
					<div styleName="wrapper tight">
						<h1 styleName="title">{post_title}</h1>
						<h4 styleName="subtitle">WordPress using Node, Express, and React.</h4>
					</div>
				</div>

				<div styleName="content">
					<div styleName="wrapper tight">
						<PostType post_type={post_type}/>
						<div styleName="authoring">
							<PostAuthor post_author={post_author}/> • <PostDate post_date={post_date}/>
						</div>
						<PostContent post_content={post_content}/>
					</div>
				</div>
			</Page>
		)
	}
}

export default Relay.createContainer(FrontPageLayout, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        page(post_name:"brazilian-real-nears-time-lows-2015"){
					id,
					post_title
					post_content
					post_type
					post_author
					post_date
					post_name
					thumbnail
				},
				settings{
					id
					uploads
					amazonS3
				}
      }
    `,
  },
});
