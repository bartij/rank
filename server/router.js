const express = require('express');
const controller = require('./controller');

module.exports = function(app) {
    const apiRoutes = express.Router();

    app.use('/api', apiRoutes);
    apiRoutes.get('/users', controller.users);
    apiRoutes.get('/repos/:username', controller.userRepos)
};
