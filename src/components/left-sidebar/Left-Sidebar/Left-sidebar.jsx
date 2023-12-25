import './Left-sidebar.scss';

import logo from '../../../resources/img/logo.svg';
import homePageIcon from '../../../resources/img/icon-nav-home.svg';
import moviesIcon from '../../../resources/img/icon-nav-movies.svg';
import bookmarkedIcon from '../../../resources/img/icon-nav-bookmark.svg';
import tvShowsIcon from '../../../resources/img/icon-nav-tv-series.svg';
import pfp from '../../../resources/img/image-avatar.png';

function LeftSidebar() {
  return (
    <div className='sidebar'>
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <div className="tabs">
          <img src={homePageIcon} alt="homePageIcon" />
          <img src={moviesIcon} alt="moviesIcon" />
          <img src={tvShowsIcon} alt="tvShowsIcon" />
          <img src={bookmarkedIcon} alt="bookmarkedIcon" />
        </div>
      </nav>
      <img src={pfp} alt="pfp" className="pfp" />
    </div>
  )
}

export default LeftSidebar