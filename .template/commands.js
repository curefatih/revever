const { exec, execSync } = require('child_process')
const config = require('./config')

module.exports.buildElectron = function (cb) {
  // console.log("building:", config.mainBuild());
  
  execSync(`tsc ${config.prepath + config.main}/*.ts --allowJs" --outDir ${config.buildDir + config.mainBuild}`)
  if(cb) cb();
}

module.exports.startRenderer = function (cb) {
  exec(`cd ${config.renderer} && npm start`, cb)
}