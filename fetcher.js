

const request = require('request');
const fs = require("fs");

const getCmdArgs = process.argv.slice(2);
const url = `${getCmdArgs[0]}`;
const destinationFile = `${getCmdArgs[1]}`;

request( url, (error, response, body) => {
  
  fs.writeFile(destinationFile, body, 'utf-8', (err) => {
    if(err) {
      throw new Error(err);
    }
    else {
      
      fs.stat(destinationFile,(err,stats) => {
        if(err) {
          console.log(err);
        }
        else {
          process.stdout.write (`Downloaded and saved ${stats.size} bytes to ${destinationFile} \r\n`)
        }
      })
    }
  })
});
