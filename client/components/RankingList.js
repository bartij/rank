import React from 'react';
import RankingItem from './RankingItem';

export default class RankingList extends React.Component {
    constructor(props) {
        super(props);
    };

    render () {
        const members = this.props.membersData;
        if (members.length > 0 && typeof(members) !== 'undefined') {
            return (
                <div>
                    <h1>Members!</h1>
                    {members.map(function (member) {
                        return <RankingItem member={member} />
                    })}
                </div>
            )
        } else {
            return <div>No contributors!</div>
        }
    }
}

RankingList.propTypes = {
    membersData: React.PropTypes.array.isRequired
};