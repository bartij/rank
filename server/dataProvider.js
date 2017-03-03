const axios = require('axios');

const GITHUB_AUTH = 'client_id=894125cd8aaacee44ca4&client_secret=93b22679efb76d4d07b64766bf90ac6e9aae167b';

function fetchOrgMembers () {
    return axios
        .get("https://api.github.com/orgs/angular/members?per_page=100&" + GITHUB_AUTH)
        .then(result => fetchUsersData(result.data).then(data => data));
}

function fetchUsersData (members) {
    const usernames = members.map(member => member.login);

    const userRequest = function getUserRequest(user) {
        return axios.get("https://api.github.com/users/" + user + "?" + GITHUB_AUTH);
    };
    return axios.all(usernames.map(userRequest))
        .then(function(data) {
            console.log('GitHub returned ' + (data.length || 'no') + ' users.');
            return data.map(response => response.data);
        });
}

module.exports = {
    fetchOrgMembers: fetchOrgMembers
};
