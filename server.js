const fastify = require('fastify')({
  logger: true
});

const port = process.env.PORT || 3000;

fastify.get('/', async () => {
  return {
    message: process.env.APP_MESSAGE || 'Hello from Fastify!',
    application: 'Fastify Demo',
    environment: process.env.NODE_ENV || 'development'
  };
});

fastify.get('/api/health', async () => {
  return {
    status: 'healthy',
    application: 'fastify-demo'
  };
});

const start = async () => {
  try {
    await fastify.listen({
      port: port,
      host: '0.0.0.0'
    });

    console.log(`Application running on port ${port}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();