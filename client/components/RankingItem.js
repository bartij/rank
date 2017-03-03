import React from 'react';

export default class RankingList extends React.Component {
    constructor(props) {
        super(props);
    };

    render () {
        return (
            <div style={{margin: 'auto'}} key={this.props.member.id}>
                <a href='#'>
                    <img style={{width: '50px', height: '50px'}} src={this.props.member.avatar_url}/>
                    {'membername: ' + this.props.member.login} {'fullname: ' + this.props.member.name}
                    {'followers: ' + this.props.member.followers} {'repos amount: ' + this.props.member.public_repos}
                    {'gists: ' + this.props.member.public_gists}
                </a>
            </div>
        )
    }
}

RankingList.propTypes = {
    member: React.PropTypes.object.isRequired
};