module.exports = (knex, CryptoHistory) => {
  return params => {
    const list = knex('crypto_history');

    if (params.between) {
      list.whereBetween('time', params.between);
    }

    if (params.fsyms) {
      list.whereIn('fsym', params.fsyms);
    }

    if (params.tsyms) {
      list.whereIn('tsym', params.tsyms);
    }

    list.select();
    list.then(histories => {
      return histories.map(history => new CryptoHistory(history));
    });

    return list;
  };
};
