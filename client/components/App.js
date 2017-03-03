import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersData: [],
            userRepos: []
        };
        this.fetchUsers();
        // this.fetchUserRepo();
    }

    fetchUsers () {
        this.serverRequest =
            axios
                .get("http://localhost:3000/api/users")
                .then(function(result){
                    console.log('result: ', result.data);
                    this.setState({usersData: result.data});
                }.bind(this));
    }

    fetchUserRepo () {
        this.serverRequest =
            axios
                .get("http://localhost:3000/api/user/vicb")
                .then(function(result){
                    console.log('result: ', result.data);
                    this.setState({userRepos: result.data});
                }.bind(this));
    }

    componentWillUnmount () {
        this.serverRequest.abort();
    }

    render () {
        const usersData = this.state.usersData;
        console.log('usersData, ', JSON.stringify(usersData[0]));
        console.log('usersRepos, ', JSON.stringify(this.state.userRepos));
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
