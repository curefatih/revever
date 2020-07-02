const { exec, execSync } = require('child_process')
const config = require('./config')

module.exports.buildElectron = function (cb) {
  // console.log("building:", config.mainBuild());
  
  execSync(`tsc ./src/main/*.ts --outDir ${config.buildDir + config.mainBuild}`)
  if(cb) cb();
}

module.exports.startRenderer = function (cb) {
  exec(`cd ${config.renderer} && npm start`, cb)
}