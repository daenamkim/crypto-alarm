const moment = require('moment');

class CryptoHistory {
  constructor(record) {
    this.id = record.id;
    this.fsym = record.fsym;
    this.tsym = record.tsym;
    this.time = record.time;
    this.open = record.open;
    this.high = record.high;
    this.low = record.low;
    this.close = record.close;
    this.volumeFrom = record.volume_from;
    this.volumeTo = record.volume_to;
    this.createdAt = record.created_at;
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
      createdAt: moment(this.createdAt).format()
    };
  }
}

module.exports = knex => {
  return {
    list: require('./list')(knex, CryptoHistory)
  };
};
