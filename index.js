module.exports = process.env.DSJS_COV
   ? require('./lib-cov/dsjs.js')
   : require('./lib/dsjs.js');