'use strict';

const Carthage = require('carthage');
const cluster = require('cluster');

if (cluster.isMaster) {

  const daemon = new Carthage.Daemon();
  daemon.start(Carthage.my.Config.secrets.port);

} else {

  const app = new Carthage.Application();
  app.listen(Carthage.my.Config.secrets.port);

}
