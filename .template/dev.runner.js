const chalk = require('chalk')
const electron = require('electron')
const path = require('path')
const { spawn } = require('child_process')
const chokidar = require('chokidar');
const { buildElectron, ...commands } = require('./commands');
const config = require('./config');

let electronProcess = null
let manualRestart = false

function startMain() {
  return new Promise((resolve, reject) => {
    chokidar.watch(config.prepath + config.main).on('all', (event, path) => {
      console.log(event, path);

      // build here 
      buildElectron(() => {

        // run again electron
        if (electronProcess && electronProcess.kill) {
          manualRestart = true
          process.kill(electronProcess.pid)
          electronProcess = null
          startElectron()

          setTimeout(() => {
            manualRestart = false
          }, 5000)
        }

      })

      resolve();
    })

  })
}

// TODO
// function startRenderer() {
//   console.log("\nStarting renderer");

//   commands.startRenderer()
// }

function startElectron() {
  console.log("\nStarting electron\n");

  var args = [
    '--inspect=5858',
    path.join(__dirname, "../" + config.buildDir + config.mainBuild + "/main.js")
  ]

  var env = Object.create(process.env);
  env.NODE_ENV = 'development';

  electronProcess = spawn(electron, args, { env })

  electronProcess.stdout.on('data', data => {
    electronLog(data, 'blue')
  })
  electronProcess.stderr.on('data', data => {
    electronLog(data, 'red')
  })

  electronProcess.on('close', () => {
    if (!manualRestart) process.exit()
  })
}


function electronLog(data, color) {
  let log = ''
  data = data.toString().split(/\r?\n/)
  data.forEach(line => {
    log += `  ${line}\n`
  })
  if (/[0-9A-z]+/.test(log)) {
    console.log(
      chalk[color].bold('┏ Electron -------------------') +
      '\n\n' +
      log +
      chalk[color].bold('┗ ----------------------------') +
      '\n'
    )
  }
}

function init() {
  Promise.all([startMain()])
    .then(() => {
      startElectron()
    })
    .catch(err => console.error(err))
}

init()