import "../CSS/HomeScreen.css";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import Row from "../Components/Row";
import requests from '../Components/request';
const HomeScreen = () => {
  return (
    <div className="home-screen">
      <Navbar />
      {/* Banner */}
      <Banner />

      {/* Row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} />

    </div>
  )
}

export default HomeScreen
