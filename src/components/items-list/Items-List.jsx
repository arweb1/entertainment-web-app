import './Items-List.scss';

import SingleItem from "../single-item/Single-item";

function ItemsList() {
  return (
    <div className='items-list-comp'>
        <h3 className='title'>Recommended for you</h3>
        <div className="items-list">
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
        </div>
    </div>
  )
}

export default ItemsList;