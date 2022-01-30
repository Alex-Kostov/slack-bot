# Slack Bot
First clone the repo and run `npm install`.
```
git clone git@github.com:Alex-Kostov/slack-bot.git
npm install
```
Once you are all setup add your slack app token in run.js and execute the following command.
```
node index.js --channel='test-channel' --text='Hello World!'
```
`--channel` is used to select in which channel to write it.
`--text` this must be in quotes and it's reponsible for the text message.
