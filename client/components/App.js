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
        this.getUserRepos();
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

    componentWillUnmount () {
        this.serverRequest.abort();
    }

    render () {
        const usersData = this.state.usersData;
        if (JSON.stringify(usersData) !== '[]') {
            return <RankingList membersData={usersData} />
        } else {
            return <div>Something went wrong, there's no GitHub data.</div>
        }
    }
};
