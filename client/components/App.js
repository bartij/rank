import React from 'react';
import axios from 'axios';

var App = React.createClass ({
    getInitialState: function () {
        return {
            members: []
        }
    },

    componentDidMount: function () {
        var _this = this;
        this.serverRequest =
            axios
                .get("https://api.github.com/orgs/angular/members")
                .then(function(result) {
                    _this.setState({
                        members: result.data
                    });
                })
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    render () {
        return(
            console.log('data: ', this.state.members),
            <div>
                <h1>Members!</h1>
                {this.state.members.map(function(member) {
                return (
                    <div key={member.id}>
                        <a href={member.html_url}>
                            {member.login}
                        </a>
                    </div>
                );
            })}
            </div>
        )
    }
});

export default App;