const dataProvider = require('./dataProvider');

let membersData = dataProvider.fetchOrgMembers();
let userRepos = dataProvider.fetchUserRepos;

exports.users = function(req, res, next) {
    membersData.then(d => res.status(200).json(d));
};
exports.userRepos = function(req, res, next) {
    const username = req.params.username;
    userRepos(username).then(data => res.status(200).json(data));
};