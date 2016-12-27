'use strict';

const Carthage = require('carthage');
const scheduler = new Carthage.Scheduler();

/* generator: begin imports */

const DummyTask = Carthage.require('tasks/dummy_task.js');

/* generator: end imports */

/* generator: begin tasks */

scheduler.minutely(30).perform(DummyTask);

/* generator: end tasks */


module.exports = scheduler;
