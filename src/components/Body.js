import React from 'react';
import RestoCart from './RestoCart';
import { RestoInfo } from './RestoInfo';

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search Bar</div>
            <div className='resto-container'>
                {
                    RestoInfo.map((resto) => <RestoCart key={resto.info.id} resto={resto} />)
                }
            </div>
        </div>
    );
};

export default Body;