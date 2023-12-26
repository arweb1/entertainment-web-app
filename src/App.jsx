import './styles/styles.scss';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { HomePage, BookmarkedPage, MoviesPage, TvShowsPage } from './pages';
import LeftSidebar from './components/left-sidebar/Left-Sidebar/Left-sidebar';
import SearchMovie from './components/search-movie/Search-movie';

function App() {
  return (
    <Router>
      <div className="page">
        <LeftSidebar/>
        <main>
          <SearchMovie/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/bookmarked" element={<BookmarkedPage/>}/>
            <Route path="/movies" element={<MoviesPage/>}/>
            <Route path="/tvshows" element={<TvShowsPage/>}/>
          </Routes>
        </main>
      </div>
    </Router>//second branch
  );
}

export default App;
