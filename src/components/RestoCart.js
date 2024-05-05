import React from 'react';

const RestoCart = (props) => {
    const resto = props.resto.info;
    debugger;
    return (
        <div className='resto-cart'>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resto.cloudinaryImageId}`}
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