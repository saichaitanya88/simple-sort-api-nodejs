// https://github.com/jluccisano/webpack-es6-boilerplate


module.exports = function (env) {
  return require(`./conf/webpack.${env}.js`)
}