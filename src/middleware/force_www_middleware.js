'use strict';

const Carthage = require('carthage');

/* Forces www. on naked domain */

class ForceWWWMiddleware {

  exec(controller, callback) {

    let host = controller._requestHeaders.host || '';

    if (host.split('.').length === 2) {
      controller.redirect(`www.${host}${request.url}`);
      return;
    }

    callback(null);

  }

}

module.exports = ForceWWWMiddleware;
