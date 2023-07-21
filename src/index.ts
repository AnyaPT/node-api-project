import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app= express();
const port=process.env.PORT;
const cors = require('cors');
app.use(cors({
  origin: '*'
}));
app.use(express.json())

let t2 = [
{
    id: 1,
    "name": "Walk the dog on Monday",
  },
  {
    id: 2,
    "name": "Do the Laundry on",
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
app.get ("/t2", (req, res) => {
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

})
