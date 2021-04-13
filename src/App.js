import './App.css';
import './components/card-list/card-list.component'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Movies from './components/Movies/Movies'
import TvShows from './components/Tv-shows/Tv-shows'
import Video from './components/video/video';
import MoreInfo from './components/moreInfo/moreInfo';
import Home from './components/Home/Home'
import MyList from './components/MyList/MyList';
function App() {


  return (
    <div className="App">
      <Router>
          <Switch>
          <Route path="/list">
            <MyList />
          </Route>
          <Route path="/Movies">
            <Movies />
          </Route>
          <Route path="/tvshows">
            <TvShows />
          </Route>
          <Route path="/video">
            <Video />
          </Route>
          <Route path="/moreInfo">
            <MoreInfo/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;