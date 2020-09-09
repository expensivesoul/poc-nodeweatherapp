const request=require('request')

const forecast=(lat,cordinates,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=d4e0daaa5c636377343a1ae6f1ffba0c&query="+lat+","+cordinates+"&units=f"
    request({url}, (error,{body}) => { 
        if(error){
            callback("unable to connect with the server",undefined)
          
        }
        else if(body.error)
        {
            callback('Unable to find the location',undefined)
         
        }
        else{
        const Jsondata=JSON.parse(body)
        callback(undefined,"It is currently "+Jsondata.current.temperature+" degree out. It feels like "+Jsondata.current.feelslike
        )
            
    }})

}


module.exports=forecast