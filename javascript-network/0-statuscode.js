const request = require('request');

const getStatusCode = (url) => {
  const response = request.get(url);
  return response.statusCode;
};

const main = () => {
  const url = process.argv[2];
  const status = getStatusCode(url);
  console.log(`code: ${status}`);
};

main();
