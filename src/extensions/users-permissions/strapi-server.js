'use strict';

const user = require('./content-types/user');

module.exports = (plugin) => {
 plugin.bootstrap = require('./server/bootstrap');
 plugin.services['providers'] = require('./server/services/providers');
 plugin.contentTypes.user = user;
 return plugin;
};