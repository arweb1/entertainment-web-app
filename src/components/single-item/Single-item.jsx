import './Single-item.scss';
import playBtn from '../../resources/img/icon-play.svg';
import bookmarkItemFull from '../../resources/img/icon-bookmark-full.svg';
import bookmarkItemEmpty from '../../resources/img/icon-bookmark-empty.svg';
import thumbnail from '../../resources/thumbnails/beyond-earth/regular/medium.jpg';

function SingleItem() {
  const backgroundStyle = {
    backgroundImage: `url(${thumbnail})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div className="single-item" style={backgroundStyle}>
        <div className="single-item__text-block">
          <h3>Beyond Earth</h3>
        </div>
        <div className="play">
          <button className="play-btn">
            <img src={playBtn} alt="play icon" />
            <span>Play</span>
          </button>
        </div>
        <div className="bookmark-item">
          <img src={bookmarkItemEmpty} alt="bookmark item" />
        </div>
    </div>
  )
}

export default SingleItem