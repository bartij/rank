const axios = require('axios');

const GITHUB_AUTH = 'client_id=894125cd8aaacee44ca4&client_secret=93b22679efb76d4d07b64766bf90ac6e9aae167b';

function fetchOrgMembers ()  {
    return axios
        .get("https://api.github.com/orgs/angular/members?per_page=100&" + GITHUB_AUTH)
        .then(function(result){
            console.log("Length: " + result.data.length);
            return fetchUsersData(result.data).then(function(data){
                console.log('data: ', data);
                return data;
            });
        });
}

function fetchUsersData (members) {
    const usernames = members.map(member => member.login);
    const userRequest = function getUserRequest(user) {
        return axios
            .get("https://api.github.com/users/" + user + "?" + GITHUB_AUTH);
    };
    return axios.all(usernames.map(userRequest))
        .then(function(data) {
            console.log('Length fetch users: ', data.length);
            return data.data;
        });
}

function fetchUserRepos (username) {
    this.serverRequest =
        axios
            .get("https://api.github.com/users/" + username + "/repos?" + GITHUB_AUTH)
            .then(function(result){
                console.log("Length: " + result.data.length);
                return result.data;
            });
}

module.exports = {
    fetchOrgMembers: fetchOrgMembers,
    fetchUserRepos: fetchUserRepos
};
