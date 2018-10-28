module.exports = (knex, CryptoHistory) => {
  return params => {
    const querySet = knex('crypto_history');

    if (params.between) {
      querySet.whereBetween('time', params.between);
    }

    if (params.fsyms) {
      querySet.whereIn('fsym', params.fsyms);
    }

    if (params.tsyms) {
      querySet.whereIn('tsym', params.tsyms);
    }

    querySet.select();
    querySet.then(histories => {
      return histories.map(history => new CryptoHistory(history));
    });

    return querySet;
  };
};
