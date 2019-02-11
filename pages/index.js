import Link from 'next/link';
import Layout from '../components/MyLayout.js';
import axios from 'axios';

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  let showData = [];
  await axios.get('https://api.tvmaze.com/search/shows?q=batman')
    .then(response => {
      console.log(`Show data fetched. Count: ${response.data.length}`);
      showData = response.data;
    })
    .catch(err => console.log(err));  

  return {
    shows: showData
  }
}

export default Index
