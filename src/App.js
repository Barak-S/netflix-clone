import MoviesContainer from './containers/MoviesContainer'
import Banner from './containers/Banner'
import Nav from './containers/Nav'
import './App.css';


function App() {

  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <MoviesContainer/>
    </div>
  );
}

export default App;
