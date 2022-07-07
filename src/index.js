module.exports = async function (electronVersion, abiVersion) {
  const fetch = require('wonderful-fetch');
  const { spawn, exec, fork } = require('child_process');
  const chalk = require('chalk');
  const path = require('path');
  const package = require(path.join(process.cwd(), 'package.json'));
  electronVersion = electronVersion || package.devDependencies.electron.match(/[\.0-9]*$/)[0];

  let error;
  let electronMap;
  let abiMap;

  await fetch(`https://cdn.jsdelivr.net/npm/electron-releases@latest/lite.json`, {
    response: 'json',
    tries: 3,
  })
  .then(result => electronMap = result)
  .catch(e => error = e)

  await fetch(`https://cdn.jsdelivr.net/npm/node-abi-version@latest/nodeabi.json`, {
    response: 'json',
    tries: 3,
  })
  .then(result => abiMap = result)
  .catch(e => error = e)

  if (error) {
    console.log(chalk.red(`[electron-rebuilder]: Failed to get resource`, error));
    return process.exit(1);
  }

  const nodeVersion = electronMap.find(i => i.version === electronVersion).deps.node;
  abiVersion = abiVersion || abiMap[nodeVersion];

  console.log(chalk.blue(`[electron-rebuilder]: Using versions... node=${nodeVersion}, electron=${electronVersion}, abi=${abiVersion}`));

  child('npm', ['rebuild', '--runtime=electron', `--target=${electronVersion}`, `--abi=${abiVersion}`, `--disturl=https://atom.io/download/atom-shell`], process.cwd())
    .then((result) => {
      console.log(chalk.green(`[electron-rebuilder]:`, 'Success'));
    })
    .catch(() => {
      console.log(chalk.red(`[electron-rebuilder]: Failed to rebuild`, data.toString()));
      return process.exit(1);
    })


  async function child(command, args, cwd) {
    return new Promise(function(resolve, reject) {

      console.log(chalk.blue(`[electron-rebuilder]: Running command... ${chalk.bold(command, ...args)}`));

      spawn(command, args, { cwd: cwd, stdio: 'inherit' })
        .on('error', function(err) {
          console.log(chalk.red(`\n\n\n!!! Error: ${err}\n${err.stack}`));
          reject(err);
        })
        .on('close', resolve)

    });
  }

}
