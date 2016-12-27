'use strict';

const Carthage = require('carthage');
const router = new Carthage.Router();

/* Middleware */
/* executed *before* Controller-specific middleware */

const CORSMiddleware = Carthage.require('middleware/cors_middleware.js');
// const CORSAuthorizationMiddleware = Carthage.require('middleware/cors_authorization_middleware.js');
// const ForceWWWMiddleware = Carthage.require('middleware/force_www_middleware.js');
// const ForceHTTPSMiddleware = Carthage.require('middleware/force_https_middleware.js');

router.middleware.use(CORSMiddleware);
// router.middleware.use(CORSAuthorizationMiddleware);
// router.middleware.use(ForceWWWMiddleware);
// router.middleware.use(ForceHTTPSMiddleware);

/* Renderware */
/* executed *after* Controller-specific renderware */

const GzipRenderware = Carthage.require('renderware/gzip_renderware.js')

router.renderware.use(GzipRenderware);

/* Routes */

const IndexController = Carthage.require('app/controllers/index_controller.js');

/* generator: begin imports */


/* generator: end imports */

router.route('/').use(IndexController);

/* generator: begin routes */


/* generator: end routes */

module.exports = router;
