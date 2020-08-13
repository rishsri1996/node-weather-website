
const request= require('request')

  const forecast = (add1,add2,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=bb506fe8cfa0d4f2f943b426aa7b4c62&query='+add1+','+add2;
    request({ url, json: true }, (error, {body}) => {    //url:url replaced  by url with ES6 object structuring and response -body is destuctured to body by ES6 destucturing as we only want body property
        if(error)
            callback('Unable to connect to weather service!',undefined);
       else if (body.error) 
            callback('Unable to find location',undefined);
        else
         {
             callback(undefined,'It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')  //response.body.current.temp destructuted to body.current .temp
         }
        })
        
}
module.exports=forecast;