module.exports = process.env.EXPRESS_COV
   ? require('./lib-cov/dsjs.js')
   : require('./lib/dsjs.js');