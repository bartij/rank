import React from 'react';
import axios from 'axios';

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
            return (
                <div>
                    <h1>Members!</h1>
                    {usersData.map(function (user) {
                        return (
                            <div style={{margin: 'auto'}} key={user.id}>
                                <a href='#'>
                                    <img style={{width: '50px', height: '50px'}} src={user.avatar_url}/>
                                    {'username: ' + user.login} {'fullname: ' + user.name}
                                    {'followers: ' + user.followers} {'repos amount: ' + user.public_repos}
                                    {'gists: ' + user.public_gists}
                                </a>
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            return <div>No data</div>
        }
    }
};
