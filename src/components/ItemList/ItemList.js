import React from 'react';
import Masonry from 'react-masonry-css';
import Item from '../Item/Item';
import './ItemList.css';



const ItemList = ({ imgs }) => {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
    
    const images = imgs.map((img, i) => {
        return (
              <Item alt={img.alt} source={img.src} key={img.id}/>
        );
    })

    return(
        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {images}
        </Masonry>
    )
}

export default ItemList