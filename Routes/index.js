const router = require('express').Router()
const Controller = require('../Controller')

router.get('/', Controller.homePageController)
router.all('/bad-data', Controller.badDataController)
router.all('/bad-gateway', Controller.gatewayController)
router.all('/bad-implementation', Controller.badImplementationController)

router.all('/*', Controller.notFoundController);

module.exports = router