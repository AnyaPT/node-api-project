"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const cors = require('cors');
app.use(cors({
    origin: '*'
}));
app.use(express_1.default.json());
let t2 = [
    {
        id: 1,
        "name": "Walk the dog on Monday",
    },
    {
        id: 2,
        "name": "Do the Laundry on Tuesday",
    },
];
//create
/*
app.post('/tasks', (req,res) => {
    const newTask ={
        name: String(req.body.name),
        id: Date.now()
    }
    tasks.push(newTask);
    res.json(newTask);
});
*/
//read
app.get("/t2", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(t2);
});
/*
app.get("/tasks/:id", function(req, res) {
   var idx = parseInt(req.params.id);
 // var item2 = tasks[idx];
var taskName = "not Found";
   for (var i in tasks)
   {
      var id = tasks[i].id;
      if(id == idx)
      {
         taskName = tasks[i].name
      }

   }
    res.send("name="+taskName);
   // res.send ("Hello World");
});

*/
//start
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map