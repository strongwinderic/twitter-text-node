# twitter-text-node
A node API that uses twitter-text API library to parse tweet can calculate its length.


## Pre requisits
- [Node](https://nodejs.org/) installed.

## Usage
1. Clone repository
2. Run
```
npm run start
```
3. Do a post request:
```
curl -X POST \
  http://localhost:3000/calculateLength \
  -H 'Content-Type: application/json' \
  -d '{
	"text": "testing tweet length 😃 http://test.com."
}'
```
4. The response will be like:
```
{
    "weightedLength": 48,
    "valid": true,
    "permillage": 171,
    "validRangeStart": 0,
    "validRangeEnd": 39,
    "displayRangeStart": 0,
    "displayRangeEnd": 39
}
```
5. Deploy to your server or to a cloud service
