'use strict';

const Mina = require('mina');
const cluster = require('cluster');

if (cluster.isMaster) {

  const daemon = new Mina.Daemon();
  daemon.start(Mina.my.Config.secrets.port);

} else {

  const app = new Mina.Application();
  app.listen(Mina.my.Config.secrets.port);

}
