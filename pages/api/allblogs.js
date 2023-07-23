import fs from 'fs';

export default function handler(req, res){
    const blogItems = req.query.blogItems
    const data = fs.readdirSync('blogs');
    const allBlogs = []
    for(let file of data){
        const fileData = fs.readFileSync('blogs/'+file, 'utf8')
        allBlogs.push(JSON.parse(fileData))
        if(blogItems){
        if(data.indexOf(file) === blogItems-1){
        return res.status(200).json(allBlogs)
        }}
    }
    res.status(200).json(allBlogs)
}