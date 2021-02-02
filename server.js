'use strict'

const fastify = require('fastify')({ 
    logger: {
    prettyPrint: true} 
})

fastify.get('/', (request, reply) => {
    fastify.log.info('I got a request')
    reply.send('hello world!')
})

async function start() {
    await fastify.listen(3000)

}

start().catch(err => {
    fastify.log.error(err)
    process.exit(1)
})