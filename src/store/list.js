//const dynamoDB= require('../dynamoDB');
const AWS= require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.handler=async(evt,ctx)=>{
    try {
        const results = await dynamoDB.scan({
            TableName: 'sls-api-store'
        }).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(results)
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        };
        
    }
 
};