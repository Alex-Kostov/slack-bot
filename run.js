const axios = require('axios');
const slackToken = 'xoxb-';

async function run(channel, text) {
	const url = 'https://slack.com/api/chat.postMessage';
	const res = await axios.post(url, {
		channel,
		text
	}, { headers: {
		'authorization': 'Bearer ' + slackToken,
		'Content-type': 'application/json; charset=utf-8'
	} });

	console.log('Done', res.data);
  }

module.exports = run;