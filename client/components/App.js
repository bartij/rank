import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            usersData: []
        }
    }

    fetchOrgMembers () {
        this.serverRequest =
            axios
                .get("https://api.github.com/orgs/angular/members?per_page=100")
                .then(function(result){
                    console.log("Length: " + result.data.length);
                    this.setState({members: result.data});
                    this.fetchUsersData(result.data);
                }.bind(this));
    }
    fetchUsersData (members) {
        let usernames = members.map(member => member.login);
        const userRequest = function getUserRequest(user) {
            return axios
                .get("https://api.github.com/users/" + user);
        };
        axios.all(usernames.map(userRequest))
            .then(function(data) {
                console.log('data: ', data);
                this.setState({usersData: data});
            }.bind(this));
        this.setState({
        });
    }
    componentWillMount () {
        this.fetchOrgMembers();
    }
    componentWillUnmount () {
        this.serverRequest.abort();
    }
    render () {
        const {usersData, members} = this.state;
        if (JSON.stringify(usersData) !== '[]') {
            console.log('userData', usersData[0].data);
            return (
                <div>
                    <h1>Members!</h1>
                    {usersData.map(function (user) {
                        return (
                            <div style={{margin: 'auto'}} key={user.id}>
                                <a href='#'>
                                    <img style={{width: '50px', height: '50px'}} src={user.data.avatar_url}/>
                                    {'username: ' + user.data.login} {'fullname: ' + user.data.name}
                                    {'followers: ' + user.data.followers} {'repos amount: ' + user.data.public_repos}
                                    {'gists: ' + user.data.public_gists}
                                </a>
                            </div>
                        );
                    })}
                </div>
            )
        }
    }
};