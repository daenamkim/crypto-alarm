*This was created during my time as a student at Code Chrysalis*

# crypto-alarm
Set the alarm to be notified according to setting and also it can provide filtered history data according to queries.



# APIs - v1

### Crypto History

GET
http://localhost:3000/api/v1/crypto-history
http://localhost:3000/api/v1/crypto-history?between=YYYY-MM-DD,YYYY-MM-DD
i.e. http://localhost:3000/api/v1/crypto-history?between=2018-10-20,2018-10-28

http://localhost:3000/api/v1/crypto-history?between=YYYY-MM-DD,YYYY-MM-DD&fsyms=btc,eth
i.e. http://localhost:3000/api/v1/crypto-history?between=2018-10-20,2018-10-28&fsyms=btc,eth

http://localhost:3000/api/v1/crypto-history?between=YYYY-MM-DD,YYYY-MM-DD&fsyms=btc,eth&tsyms=usd,jpy
i.e. http://localhost:3000/api/v1/crypto-history?between=2018-10-20,2018-10-28&fsyms=btc,eth&tsyms=usd,jpy


GET
http://localhost:3000/api/v1/alarm-set
return
http://localhost:3000/api/v1/alarm-set/id
query
return

POST
http://localhost:3000/api/v1/alarm-set
body
{
  "title": "BTC to USD monitor",
  "fsym": "BTC",
  "tsym": "USD",
  "price": 6534.1,
  "option": "less",
  "enable": true
}
return

PATCH
http://localhost:3000/api/v1/alarm-set/id
param
body
{
  "title": "BTC to USD monitor",
  "fsym": "BTC",
  "tsym": "USD",
  "price": 6534.1,
  "option": "less",
  "enable": true
}
return

DELETE
http://localhost:3000/api/v1/alarm-set/id
param
return

no historical data for target of crypto currency.


# Future

batch to update all daily crypto prices
