import React from 'react';
import Masonry from 'react-masonry-css';
import Item from '../Item/Item';
import './ItemList.css';



const ItemList = ({ imgs, onDessertClick, modalState }) => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 2,
        500: 1
    };
    
    const images = imgs.map((img, i) => {
        return (
              <Item alt={img.alt} source={img.src} id={img.id} onDessertClick={onDessertClick} description={img.description}/>
        );
    })

    return(
        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {images}
        </Masonry>
    )
}

export default ItemList