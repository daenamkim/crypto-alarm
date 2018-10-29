*This was created during my time as a student at Code Chrysalis*

# Crypto Alarm
Set the alarm to be notified according to setting and also it can provide filtered history data according to queries.

# APIs - v1

### Crypto History (Daily)

- GET /api/v1/crypto-history{?between=FROM,TO&fsym=BTC&tsym=USD}
  - i.g. `http://localhost:3000/api/v1/crypto-history?between=2018-10-24,2018-10-28&fsym=BTC&tsym=USD`


### Crypto Alarm Set (Minute)

- GET /api/v1/alarm-set
- GET /api/v1/alarm-set/{id}
  - i.g. `http://localhost:3000/api/v1/alarm-set/109`

- POST /api/v1/alarm-set
- PATCH /api/v1/alarm-set/{id}
  - i.g. `http://localhost:3000/api/v1/alarm-set/109`

- DELETE /api/v1/alarm-set/{id}
  - i.g. `http://localhost:3000//api/v1/alarm-set/109`

# Next

Coming soon...
