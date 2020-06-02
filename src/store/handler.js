module.exports.handler=async(evt,ctx)=>{
    console.log(evt);
    return{
        statusCode:200,
        body : JSON.stringify({
            "name": "Store added",
            evt
        })
    }
}