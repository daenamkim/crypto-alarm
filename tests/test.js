/* eslint-disable no-console */
const { expect } = require("chai");
const config = require("../config");
const knex = require("knex")(config.db);
const db = require("../services/db")(config.db);

const forcePromiseReject = () => {
  throw new Error("This promise should have failed, but did not.");
};

describe("crypto_history", () => {
  describe("setup", () => {
    it("check migrations", () => {
      knex('crypto_history')
        .select()
        .catch(err => console.log(err));
    });
  });

  describe("#list", () => {
    it("lists all crypto histories", () =>
      db.cryptoHistory.list().then((resp) => {
        expect(resp.length).to.be.above(1);
      }));

    it("returns serializable objects", () =>
      db.cryptoHistory.list().then((resp) => {
        // FIXME:
        // expect(resp[0].serialize).to.be.a("function");
        // expect(resp[0].serialize().id).to.be.a("number");
        // expect(resp[0].serialize().username).to.be.a("string");
      }));
  })
});

describe("alarm_set", () => {
  describe("setup", () => {
    afterEach(() => knex("alarm_set").del());
    it("check migrations", () => {
      knex('alarm_set')
        .select()
        .catch(err => console.log(err));
    });
  });

  describe("#create", () => {
    const params = {
      title: "BTC to USD monitor",
      fsym: "BTC",
      tsym: "USD",
      price: 6534.1,
      option: "less",
      enable: true
    };
    afterEach(() => knex("alarm_set").del());
    it("new alarm set was added successfully", () => {
      db.alarmSet
        .create(params)
        .then(alarmSet => {
          expect(alarmSet).to.include({ title: params.title });
          expect(alarmSet.id).to.be.a("number");
        });
    });
  });

  describe("#update", () => {
    const paramsCreate = {
      title: "BTC to USD monitor",
      fsym: "BTC",
      tsym: "USD",
      price: 6534.1,
      option: "less",
      enable: true
    };
    const paramsUpdate = {
      title: "ETH to USD monitor",
      fsym: "ETH",
      tsym: "USD",
      price: 6534.1,
      option: "less",
      enable: true
    };
    afterEach(() => knex("alarm_set").del());
    it("alarm set was updated successfully", () => {
      knex("alarm_set").del();
      db.alarmSet
        .create(paramsCreate)
        .then(alarmSet => {
          paramsUpdate["id"] = alarmSet.id;
          return db.alarmSet.update(paramsUpdate);
        })
        .then(alarmSet => {
          expect(alarmSet).to.include({ title: paramsUpdate.title });
          expect(alarmSet.id).to.be.a("number");
        });
    });
  });

  describe("#delete", () => {
    const params1 = {
      title: "BTC to USD monitor",
      fsym: "BTC",
      tsym: "USD",
      price: 6534.1,
      option: "less",
      enable: true
    };
    const params2 = {
      title: "ETH to USD monitor",
      fsym: "ETH",
      tsym: "USD",
      price: 6534.1,
      option: "less",
      enable: true
    };
    afterEach(() => knex("alarm_set").del());
    it("alarm set was deleted successfully", () => {
      db.alarmSet
        .create(params1)
        .then(() => {
          return db.alarmSet.create(params2);
        })
        .then(alarmSet => {
          return db.alarmSet.delete({id: alarmSet.id});
        })
        .then(() => {
          return db.alarmSet.list();
        })
        .then(alarmSets => {
          expect(alarmSets.length).to.equal(1);
        });
    });
  });
});
