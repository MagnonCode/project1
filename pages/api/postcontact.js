import * as fs from 'fs'

export default function handler(req,res){
if(req.method === 'POST'){
    let data = fs.readdirSync('contactdata');
    fs.writeFileSync(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body));
    res.status(200).json("post request at post contact successful");
}else{
    res.status(200).json("get request at post contact successful")
}
}