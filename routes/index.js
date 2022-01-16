const router = require('expres').router()
const apiRoutes = require('./api')

router.use('/api', apirRoutes)

module.exports =  router