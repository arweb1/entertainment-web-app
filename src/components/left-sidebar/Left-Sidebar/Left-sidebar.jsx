import './Left-sidebar.scss';

import logo from '../../../resources/img/logo.svg';
import homePageIcon from '../../../resources/img/icon-nav-home.svg';
import moviesIcon from '../../../resources/img/icon-nav-movies.svg';
import bookmarkedIcon from '../../../resources/img/icon-nav-bookmark.svg';
import tvShowsIcon from '../../../resources/img/icon-nav-tv-series.svg';
import pfp from '../../../resources/img/image-avatar.png';

import { Link } from 'react-router-dom';

function LeftSidebar() {
  return (
    <div className='sidebar'>
      <nav>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="tabs">
          <Link to="/">
            <img src={homePageIcon} alt="homePageIcon" />
          </Link>
          <Link to="/movies">
            <img src={moviesIcon} alt="moviesIcon" />
          </Link>
          <Link to="/tvshows">
            <img src={tvShowsIcon} alt="tvShowsIcon" />
          </Link>
          <Link to="/bookmarked">
            <img src={bookmarkedIcon} alt="bookmarkedIcon" />
          </Link>
        </div>
      </nav>
      <img src={pfp} alt="pfp" className="pfp" />
    </div>
  )
}

export default LeftSidebar