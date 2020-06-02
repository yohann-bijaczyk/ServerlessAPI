const uuid = require('uuid'); 
//const dynamoDB= require('../dynamoDB');

const AWS= require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.handler=async(evt,ctx)=>{
    const data = JSON.parse(evt.body);
    const timestamp = new Date().getTime();

    const params = {
        TableName:'sls-api-store',
        Item: {
            id: uuid.v1(),
            title: data.title,
            point: data.point,
            published: data.published,
            createdAt: timestamp,
            updatedAt: timestamp 
        }
    };
    try {
        const newJob = await dynamoDB.put(params).promise();
        console.log(newJob);
        return {
            statusCode:200,
            body: JSON.stringify(params.Item)
        };
    } catch (error) {
        return{
            statusCode: 500,
            body: JSON.stringify(error)
        };
    }

    
};