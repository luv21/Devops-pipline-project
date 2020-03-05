const child = require('child_process');
const chalk = require('chalk');
const path = require('path');
const os = require('os');
const fs = require('fs');


const scpSync = require('../lib/scp');
const sshSync = require('../lib/ssh');

// exports.command = 'build <file> <inventory>';
exports.command = 'build <build_name>';
exports.desc = 'Trigger a build job (named checkbox.io), wait for output, and print build log';
exports.builder = yargs => {
    yargs.options({
        build_name:{
            describe: 'Name of the build to be triggered',
            type: 'string'
        },
        vaultfilePath: {
            alias: 'vp',
            describe: 'Password file  for ansible-vault',
            type: 'string',
            default: 'pipeline/password/jenkins',
            nargs: 1
	}
    });
};


exports.handler = async argv => {
    const { build_name, vaultfilePath } = argv;

    console.log(build_name);

    (async () => {

        if (fs.existsSync(path.resolve('pipeline/playbook_build.yml')) && fs.existsSync(path.resolve('pipeline/inventory.ini')) && build_name==="checkbox.io") {
            await jenkins_build('pipeline/playbook_build.yml','pipeline/inventory.ini', vaultfilePath);
        }

        else {
            console.error(`Did you mean build_name as checkbox.io??`);
        }

    })();

};

async function jenkins_build(file, inventory, vaultfilePath) {

    // the paths should be from root of cm directory
    // Transforming path of the files in host to the path in VM's shared folder
    let filePath = '/bakerx/'+ file;
    let inventoryPath = '/bakerx/' +inventory;
    vaultfilePath = '/bakerx/'+ vaultfilePath;
    console.log(chalk.blueBright('Running ansible script for build...'));
    let result = sshSync(`/bakerx/pipeline/run-ansible.sh ${filePath} ${inventoryPath} ${vaultfilePath}`, 'vagrant@192.168.33.10');
    if( result.error ) { process.exit( result.status ); }

}