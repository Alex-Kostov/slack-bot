const yargs = require('yargs');
const argv = yargs(process.argv.slice(2)).argv;
const run = require('./run.js');

if (!argv.text) {
	throw new Error('text parameter missing.');
}

const text = argv.text;
const channel = argv.channel ? '#' + argv.channel : '#test-channel';

run(channel, text).catch(err => console.log(err));

