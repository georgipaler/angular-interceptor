const express = require('express')
const app = express()
const port = 3000

const data = {
    id: 1,
    description: "new object"
};

let postObjects = [
    {
        id: 1,
        taskName: "name1",
        description: "new object"
    },
    {
        id: 2,
        taskName: "name2",
        description: "second object"
    }
];

//app.get('/', (req, res) => res.send('Hello World!'));
app.get('/test', (req, res) => 
{
    if (!req.headers.authorization) res.send(400, 'missing authorization header');
    console.log("header", req.headers.authorization);
    res.status(200).send(data); 
     
});


 app.get("/", (req, res) => {
    res.status(200).send("My first WEB API"); 
 });
app.get('/get-data', (req,res) =>{
    res.status(200).send(data); 
 });

 app.post('/add-object', (req, res) => {
    let obj = {};
    obj.id = postObjects.length + 1;
    obj.taskName = req.body.taskName;
    obj.description = req.body.description;
    console.log(req)
    postObjects.push(obj);
    //res.status(200).send('obj Added Successfully');
 });

 app.get('/get-obj', (req, res) => 
{
    if (!req.headers.authorization) res.send(400, 'missing authorization header');
    console.log("header", req.headers.authorization);
    res.status(200).send(postObjects); 
     
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))