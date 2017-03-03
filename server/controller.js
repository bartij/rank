const dataProvider = require('./dataProvider');

let data = dataProvider.fetchOrgMembers();

exports.users = function(req, res, next) {
    data.then(d => res.status(200).json(d));
};
