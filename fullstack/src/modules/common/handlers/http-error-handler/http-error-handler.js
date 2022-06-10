const httpStatusCodes = require('http-status-codes');
const uuid = require('uuid');

const httpErrorHandler = ({ req, res, error }) => {

  const response_status_code = error.statusCode || httpStatusCodes.INTERNAL_SERVER_ERROR;
  const is_internal = error.statusCode === httpStatusCodes.INTERNAL_SERVER_ERROR;
  const error_id = uuid.v4();

  const response = {
    type: `internal server error (${error_id})`,
  };

  if (!is_internal) {
    Object.assign(response, {
      message: error.message,
      details: error.details || error,
    });
  }
  const error_context = {
    error: String(error),
    error_id,
    request: {
      headers: req.headers || {},
      host: req.get('host') || '',
      response_status_code: response_status_code || 0,
      params: req.params || {},
      path: req.originalUrl || '',
      protocol: req.protocol || '',
      query: req.query || {},
    },
    response,
    stack: error.stackTrace
  };
  console.log(JSON.stringify(error_context));

  return res.status(response_status_code).json(response).end();

}
module.exports = { httpErrorHandler }