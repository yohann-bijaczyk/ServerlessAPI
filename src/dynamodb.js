const AWS= require('aws-sdk');
let options = {};
// works for local
/*const dynamoDB = new AWS.DynamoDB.DocumentClient({
    region:'localhost',
    endpoint:'http://localhost:8000'
});*/

const dynamoDB = new AWS.DynamoDB.DocumentClient(options);
module.exports= dynamoDB;