import React from 'react';

const MainButton = ({children}) => {
    return (
        <div>
            <button className="btn btn-outline btn-primary">{children}</button>
        </div>
    );
};

export default MainButton;