import React, { useState } from 'react';
import RestoCart from './RestoCart';
import { RestoInfo } from '../utils/RestoInfo';

const Body = () => {
    const [restoInfo, setRestoInfo] = useState(RestoInfo);
    return (
        <div className='body'>
            <div className='filterButton'>
                <button className='filter-btn'
                    onClick={() => setRestoInfo(restoInfo.filter(res => res.info.avgRating > 4.2))}>Top Rated Restorunts</button>
            </div>
            <div className='resto-container'>
                {
                    restoInfo.map((resto) => <RestoCart key={resto.info.id} resto={resto} />)
                }
            </div>
        </div>
    );
};

export default Body;