'use strict';
const cors = require('cors');
const SwaggerExpress = require('swagger-express-mw');
const SwaggerUi = require('swagger-ui-express');
const express = require('express');
const { buildHandlers } = require('./modules');
const { handlers } = buildHandlers();
const port = Number(process.env.PORT || 8089)

const app = express();

const whitelist = [
  // TODO whitelist
]

app.use(cors({
  origin: function (origin, callback) {
    const allowed = whitelist.indexOf(origin) !== -1
    if (allowed) return callback(null, true);

    callback(new Error('Not allowed by CORS'))
  }
}))

const swaggerConfig = {
  appRoot: __dirname,
  swaggerFile: `${__dirname}/config/swagger.yaml`,
};

const onSwaggerCreated = (error, swaggerExpress) => {
  if (error) throw error;

  const swaggerDocument = swaggerExpress.runner.swagger;
  app.use('/api/v1/docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocument));
  swaggerExpress.register(app); // register middlewares
  app.listen(port, () => console.info('onAppStart', { port }));
};

SwaggerExpress.create(swaggerConfig, onSwaggerCreated);

module.exports = {
  app,
  ...handlers
};
