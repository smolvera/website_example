import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colours = ["red", "pink", "green", "blue", "orange", "yellow", "indigo", "purple"];

    const randomColour = colours[Math.floor(Math.random() * 7)];

    const className = randomColour + '-text';

    return (props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }

    }


export default Rainbow;