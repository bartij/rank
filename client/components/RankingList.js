import React from 'react';
import RankingItem from './RankingItem';

export default class RankingList extends React.Component {
    constructor(props) {
        super(props);
    };

    render () {
        const members = this.props.membersData;
        let i = 1;
        if (members.length > 0 && typeof(members) !== 'undefined') {
            return (
                <div className="ranking">
                    <h1 className="title">Angular contributors ranking</h1>
                    <ol className="list">
                    {members.map(function (member) {
                        return <RankingItem member={member} key={i} number={i++}/>
                    })}
                    </ol>
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