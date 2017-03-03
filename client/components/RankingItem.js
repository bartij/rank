import React from 'react';

export default class RankingList extends React.Component {
    constructor(props) {
        super(props);
    };

    render () {
        return (
            <li style={{margin: 'auto'}}>
                <a href='#'>
                    <img style={{width: '30px', height: '30px'}} src={this.props.member.avatar_url}/>
                    {'membername: ' + this.props.member.login} {'fullname: ' + this.props.member.name}
                    {'followers: ' + this.props.member.followers} {'repos amount: ' + this.props.member.public_repos}
                    {'gists: ' + this.props.member.public_gists}
                </a>
            </li>
        )
    }
}

RankingList.propTypes = {
    member: React.PropTypes.object.isRequired,
    key: React.PropTypes.number.isRequired
};