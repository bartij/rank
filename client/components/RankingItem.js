import React from 'react';

export default class RankingList extends React.Component {
    constructor(props) {
        super(props);
    };

    render () {
        return (
            <li>
                <a href='#'>
                    <img src={this.props.member.avatar_url}/>
                    <h3>{this.props.member.name} {`(${this.props.member.login})`} </h3>
                    <p>
                        {'followers: ' + this.props.member.followers}
                        {'\trepos amount: ' + this.props.member.public_repos}
                        {'\tgists: ' + this.props.member.public_gists}
                    </p>
                </a>
            </li>
        )
    }
}

RankingList.propTypes = {
    member: React.PropTypes.object.isRequired,
    number: React.PropTypes.number.isRequired
};