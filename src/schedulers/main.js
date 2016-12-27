'use strict';

const Mina = require('mina');
const scheduler = new Mina.Scheduler();

/* generator: begin imports */

const DummyTask = Mina.require('tasks/dummy_task.js');

/* generator: end imports */

/* generator: begin tasks */

scheduler.minutely(30).perform(DummyTask);

/* generator: end tasks */


module.exports = scheduler;
