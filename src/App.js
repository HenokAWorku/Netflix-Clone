
import './App.css';
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import requests from './requests';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
    <Row title="Netflix Original"fetchUrl={requests.fetchNetflixOriginals}isLargeRow/>
    <Row title="Trending Now"fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated"fetchUrl={requests.fetchTopRatedMovies}/>
    <Row title="Action Movies"fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Trending Now"fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Documentaries Now"fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
