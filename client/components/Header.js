import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    };

    render () {
        return (
            <div className="header">
                <img src={require("../images/rank-logo.png")} alt="AngulaRank logo" />
                <h1>AngulaRank</h1>
            </div>
        )
    }
}
