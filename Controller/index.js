const Boom = require('@hapi/boom');
const homePageController = async (req, res, next) => {
    try {
        res.status(200).send('Welcome to Home Page!!')
    } catch (error) {
        next(error)
    }
}

const badDataController = async (req, res, next) => {
    try {
        res.json(Boom.badData('Bad Data'));     // this will set the status to 422
    } catch (error) {
        next(error)
    }
}

const gatewayController = async (req, res, next) => {
    try {
        res.json(Boom.badGateway('Bad Gateway'));   // this will set the status to 502
    } catch (error) {
        next(error)
    }
}

const badImplementationController = async (req, res, next) => {
    try {
        res.json(Boom.badImplementation('Bad Implementation')); // this will set the status to 500
    } catch (error) {
        next(error)
    }
}

const notFoundController = async (req, res, next) => {
    try {
        res.json(Boom.notFound("Not Existed"));
    } catch (error) {
        next(error)
    }
}

module.exports = {
    homePageController,
    badDataController,
    gatewayController,
    badImplementationController,
    notFoundController
}
