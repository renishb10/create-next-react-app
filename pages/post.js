import React from 'react'
import Layout from '../components/MyLayout';
import {withRouter} from 'next/router';

const Content = withRouter((props) => (
    <div>
      <h1>{props.router.query.title}</h1>
      <p>This is the blog post content.</p>
    </div>
  ))
  
  const Post = (props) => (
      <Layout>
         <Content />
      </Layout>
  )

export default Post
