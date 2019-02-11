import React from 'react'
import Layout from '../components/MyLayout';
import {withRouter} from 'next/router';
import axios from 'axios';

const Post = (props) => (
    <Layout>
       <h1>{props.show.name}</h1>
       <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
       <img src={props.show.image.medium}/>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  let showData = [];
  await axios.get(`https://api.tvmaze.com/shows/${id}`)
    .then(response => {
      console.log(`Fetched show: ${response.data.name}`)
      showData = response.data;
    })
    .catch(err => console.log(err.message));  

  return { show: showData }
}


export default Post
