const moment = require('moment');

class AlarmSet {
  constructor(record) {
    this.id = record.id;
    this.title = record.title;
    this.fsym = record.fsym;
    this.tsym = record.tsym;
    this.price = record.price;
    this.option = record.option;
    this.enable = record.enable;
    this.createdAt = record.created_at;
    this.updatedAt = record.updated_at;
  }

  serialize() {
    // FIXME:
    return {
      id: this.id,
      title: this.title,
      fsym: this.fsym,
      tsym: this.tsym,
      price: this.price,
      option: this.option,
      enable: this.enable,
      createdAt: moment(this.created_at).format(),
      updatedAt: moment(this.updated_at).format()
    };
  }
}

module.exports = (knex) => {
  return {
    create: require('./create')(knex, AlarmSet),
    update: require('./update')(knex, AlarmSet),
    get: require('./get')(knex, AlarmSet),
    list: require('./list')(knex, AlarmSet),
    delete: require('./delete')(knex, AlarmSet)
  };
};
