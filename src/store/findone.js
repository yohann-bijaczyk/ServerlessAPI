const dynamoDB= require('../dynamoDB');

module.exports.handler=async(evt,ctx)=>{
    const title = evt.pathParameters.title;
    
    console.log(title);
    try {
        const results = await dynamoDB
            .get({
                TableName:'sls-api-store',
                Key:{
                    id
                }
            }).promise();
            return{
                statusCode:200,
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