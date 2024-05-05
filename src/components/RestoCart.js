import React from 'react';
import { CDN_URL } from '../utils/constant';

const RestoCart = (props) => {
    const resto = props.resto.info;
    debugger;
    return (
        <div className='resto-cart'>
            <img src={`${CDN_URL}${resto.cloudinaryImageId}`}
                alt='resto-item'
                width={200}
                height={200} />
            <h3>{resto.name}</h3>
            <h4>{resto.cuisines.join(",")}</h4>
            <h4>{resto.locality}</h4>
            <h5>{resto.avgRating}</h5>
            <h5>{resto.costForTwo}</h5>
            <h6>{resto.sla.deliveryTime}</h6>
        </div>
    );
};

export default RestoCart;