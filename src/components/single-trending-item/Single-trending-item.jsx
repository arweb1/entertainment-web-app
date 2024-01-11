import './Single-trending-item.scss';
import playBtn from '../../resources/img/icon-play.svg';
import bookmarkItemFull from '../../resources/img/icon-bookmark-full.svg';
import bookmarkItemEmpty from '../../resources/img/icon-bookmark-empty.svg';
import thumbnail from '../../resources/thumbnails/beyond-earth/regular/large.jpg';
import typeIcon from '../../resources/img/icon-category-movie.svg'

function SingleTrendingItem() {
  const backgroundStyle = {
    backgroundImage: `url(${thumbnail})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div className="single-trending-item" style={backgroundStyle}>
        <div className="text-block">
          <div className="details">
            <span>2019</span>
            <span className='type'>
              <img src={typeIcon} alt="type" />
              Movie
            </span>
            <span>
              PG
            </span>
          </div>
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

export default SingleTrendingItem;