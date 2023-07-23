import * as fs from "fs";

//D:\tanish\vs learn\NeXT..js\Tutorial\CWH\project1\blogs\how-to-learn-javascript.json
//http://127.0.0.1:3000/api/getblog?blog=how-to-learn-javascript

export default function handler(req, res) {
  const blog = req.query.blog;
  let data;
  try {
    data = fs.readFileSync(`blogs/${blog}.json`, "utf8");
  } catch (err) {
    res.json({ error: "file not found" });
  }
  res.status(200).json(JSON.parse(data));
}
