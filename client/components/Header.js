import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    };

    render () {
        return (
            <div className="header">
                <div className="row">
                    <div className="col-md-4">
                        <img src={require("../images/rank-logo.png")} alt="AngulaRank logo" />
                        <p className="logoText">AngulaRank</p>
                    </div>
                    <div className="col-md-4">
                        Filtering will be there
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
        )
    }
}
