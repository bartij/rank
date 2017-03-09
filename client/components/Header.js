import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    };

    render () {
        return (
            <div className="header">
                <div className="row">
                    <img src="/rank-logo.png" alt="AngulaRank logo" />
                    <p className="logoText">AngulaRank</p>
                </div>
            </div>
        )
    }
}
