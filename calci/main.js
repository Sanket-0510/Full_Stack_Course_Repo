import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.urlencoded({extended:true}))
const __dirname = dirname(fileURLToPath(import.meta.url));

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

const renderCalci = (req, res) => {
    res.sendFile(__dirname + "/index.html");
};

app.get("/", renderCalci);
const result =(req,res)=>{
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)
    var result = num1 +num2
    res.send("ans is "+ result)
}
app.post("/calculate", result)

