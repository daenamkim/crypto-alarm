const moment = require('moment');

class CryptoHistory {
  constructor(record) {
    this.id = record.id;
    this.fsym = record.fsym;
    this.tsym = record.tsym;
    this.time = new Date(record.time);
    this.open = record.open;
    this.high = record.high;
    this.low = record.low;
    this.close = record.close;
    this.volumeFrom = record.volume_from;
    this.volumeTo = record.volume_to;
    this.createdAt = new Date(record.created_at);
  }

  serialize() {
    return {
      id: this.id,
      fsym: this.fsym,
      tsym: this.tsym,
      time: moment(this.time).format(),
      open: this.open,
      high: this.high,
      low: this.low,
      close: this.close,
      volumeFrom: this.volumeFrom,
      volumeTo: this.volumeTo,
      createdAt: moment(this.time).format()
    };
  }
}

module.exports = knex => {
  return {
    // create: require('./create')(knex, CryptoHistory),
    // update: require('./update')(knex, CryptoHistory),
    // get: require('./get')(knex, CryptoHistory),
    list: require('./list')(knex, CryptoHistory),
    // delete: require('./delete')(knex, CryptoHistory)
  };
};
