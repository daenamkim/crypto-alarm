const config = require('./config.js');

const services = require('./services')(config);

const apiRouter = require('./routes/api')(services);

const morgan = require('morgan');

const bodyParser = require('body-parser');

const express = require('express');

const app = express();

// For every log.
app.use(morgan('dev'));

// Set headers for requests.
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,PUT,POST,DELETE,OPTIONS,PATCH'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, authorization'
  );
  next();
});

// Parse request body json.
app.use(bodyParser.json({type: 'application/json'}));

// API router.
app.use('/api', apiRouter);
app.use(express.static(`${__dirname}/public`));

// Start to listen.
app.listen(config.express.port, () => {
  services.logger.log(`Server up and listening on port ${config.express.port}`);
});

// TODO: Refactor!
const axios = require('axios');
const schedule = require('node-schedule');

const sendAlarm = text => {
  axios.post('https://hooks.slack.com/services/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', {
    "attachments": [
      {
        text: text,
        title: "Crypto Alarm Notification",
        title_link: "http://localhost:3000",
        ts: Math.round(new Date().getTime()/1000)
      }
    ]
  })
  .then(function (response) {
    // console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};

const checkPrice = services => {
  services.db.alarmSet
    .list()
    .then(alarmSets => alarmSets.filter(alarmSet => alarmSet.enable === true))
    .then(alarmsEnabled => {
      const prices = [];
      alarmsEnabled.forEach(alarm => {
        // TODO: set multiple value manually.
        prices.push({price: alarm.price, option: alarm.option, fsym: alarm.fsym, tsym: alarm.tsym});
        prices.push(axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${alarm.fsym}&tsyms=${alarm.tsym}`));
      });
      return Promise.all(prices);
    })
    .then(data => {
      for (let i = 0; i < data.length; i += 2) {
        const alarmData = data[i];
        const serverData = data[i + 1].data;
        // console.log(data[i], data[i + 1].data);
        if (alarmData.option === 'less' && serverData[alarmData.tsym] < alarmData.price) {
          sendAlarm(`${alarmData.tsym} price of ${alarmData.fsym} is less than ${alarmData.price}. Currently it is ${serverData[alarmData.tsym]}`);
        } else if (alarmData.option === 'greater' && serverData[alarmData.tsym] > alarmData.price) {
          sendAlarm(`${alarmData.tsym} price of ${alarmData.fsym} is greater than ${alarmData.price}. Currently it is ${serverData[alarmData.tsym]}`);
        }
      }
    });
};

const rule = new schedule.RecurrenceRule();
rule.second = 0;
schedule.scheduleJob(rule, () => {
  checkPrice(services);
});
