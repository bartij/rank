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
            const array = this.sortMembers(usersData);
            console.log('array: ', array);
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
