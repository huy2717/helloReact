import React, { Component } from 'react';

export default class avatar extends Component {
    render() {
        return (
            <div>
                <img src={this.props.imageUrl} style={{ height: 100 , width: 100 , borderRadius: 50 }} />
            </div>
        );
    }
}
