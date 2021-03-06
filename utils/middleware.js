const logger = require('./logger')

const requestLogger = (request, response, next) => {
  logger.info('Method', request.method)
  logger.info('Path', request.path)
  logger.info('Body', request.body)
  logger.info('____')
  next()
}

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)
}

const tokenExtractor = (request, response, next) => {

    const authorization = request.get('authorization');
    if(authorization && authorization.toLowerCase().startsWith('bearer')){
     request.body.token = authorization.substring(7)
  
    } else {
      request.body.token = null
    }

  
    next()
}

module.exports = {
  requestLogger,
  errorHandler,
  tokenExtractor
}