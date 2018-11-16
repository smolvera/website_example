import React from 'react';

const Contact = (props) => {
    console.log(props);
    //programatic redirect example
    // setTimeout(() => {
    //     props.history.push("/about");
    // }, 2000);
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Welcome to the Contact page</p>
        </div>
    )
}

export default Contact;