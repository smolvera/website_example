import React, { Component } from 'react';

// setting up route parameters and grabbing the id
class Post extends Component {
    state = {
        id: null
    }
    componentDidMount() {
        let id = this.props.match.params.post_id;
        this.setState({
            id: id
        })
    }
    render() {
        return(
            <div className="container">
                <h4>{this.state.id}</h4>
            </div>
        )
    }
}

export default Post;