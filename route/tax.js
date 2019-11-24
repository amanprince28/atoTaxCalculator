const tax = require('../controller/tax');

// Custom Validation    
const validate = {
    schema: {
      body: {
        type: 'object',
        required:["first-name","last-name","annual-salary","super-rate","payment-start-date"],
        properties: {
            "first-name": { type: 'string' },
            "last-name": { type: 'string' },
            "annual-salary": { type: 'number' },
            "super-rate": { type: 'number' },
            "payment-start-date" : { type: 'string' }
        }
      }
    }
  }
  

async function routes(fastify, options) {

    fastify.post('/', validate, async (request, reply) => {
        const response = await tax.getMyTax(request.body);
        return response;
    })
}

module.exports = routes