import React from 'react';

const Scroll = ({ children }) => {
    return (
        <div style={ {overflowY: 'scroll', border: '1px solid red', height: '500px'} }>
            { children }
        </div>
    );
}

export default Scroll;