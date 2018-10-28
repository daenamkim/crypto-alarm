*This was created during my time as a student at Code Chrysalis*

# crypto-alarm
Set the alarm to be notified according to setting and also it can provide filtered history data according to queries.



# APIs - v1

### Crypto History

http://localhost:3000/api/v1/crypto-history
http://localhost:3000/api/v1/crypto-history?between=YYYY-MM-DD,YYYY-MM-DD
i.e. http://localhost:3000/api/v1/crypto-history?between=2018-10-20,2018-10-28

http://localhost:3000/api/v1/crypto-history?between=YYYY-MM-DD,YYYY-MM-DD&fsyms=btc,eth
i.e. http://localhost:3000/api/v1/crypto-history?between=2018-10-20,2018-10-28&fsyms=btc,eth

http://localhost:3000/api/v1/crypto-history?between=YYYY-MM-DD,YYYY-MM-DD&fsyms=btc,eth&tsyms=usd,jpy
i.e. http://localhost:3000/api/v1/crypto-history?between=2018-10-20,2018-10-28&fsyms=btc,eth&tsyms=usd,jpy

