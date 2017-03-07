import React from 'react';
import axios from 'axios';
import RankingList from './RankingList';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersData: [],
            userRepos: []
        };
        this.getUsers();
    }

    getUserRepos (username) {
        this.serverRequest =
            axios
                .get("http://localhost:3000/api/repos/" + username)
                .then(function(result){
                    console.log('Number user\'s repos: ', result.data.length);
                    this.setState({usersRepos: result.data});
                }.bind(this));
    }

    getUsers () {
        this.serverRequest =
            axios
                .get("http://localhost:3000/api/users")
                .then(function(result){
                    console.log('Number of users from GitHub: ', result.length);
                    this.setState({usersData: result.data});
                }.bind(this));
    }

    sortMembers (members) {
        const sort_key = "points";
        members.map(member => member[sort_key] =
            parseInt(member.public_repos) + parseInt(member.gists) + parseInt(member.followers));
        return this.sortMethod(members, sort_key)
    }

    sortMethod (arrayOfObjects, key) {
        return arrayOfObjects.sort(function (a, b) {
            if (a[key] < b[key]) {
                return 1
            } else {
                return -1
            }
        })
    }

    componentWillUnmount () {
        this.serverRequest.abort();
    }

    render () {
        const usersData = this.state.usersData;
        if (JSON.stringify(usersData) !== '[]') {
            return <RankingList membersData={usersData} />
        } else {
            return <h1>
                <span className="let1">l</span>
                <span className="let2">o</span>
                <span className="let3">a</span>
                <span className="let4">d</span>
                <span className="let5">i</span>
                <span className="let6">n</span>
                <span className="let7">g</span>
            </h1>
        }
    }
};
