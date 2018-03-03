import React from 'react';

const Searchbox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input  className="pa3 b--green bg-lightest-blue"
                    type="search" 
                    placeholder='Enter the name of robot'
                    onChange={searchChange}/>
        </div>
    );
}

export default Searchbox;