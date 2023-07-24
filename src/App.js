import React, {useEffect, useState} from 'react';

function App () {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [num, setNum] = useState("");


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://127.0.0.1:4000/addTask", {
        method: 'POST',
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        },    
        body: new URLSearchParams({
            'name': name,
            'num': num,
        }),

      });

      if (res.status === 200) {
        console.log("Success");
        fetchData();

         } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

const fetchData = () => {
  
    fetch("http://127.0.0.1:4000/task")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setList(data)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])
const deleteTodo = (id) => {
  //Filter out todo with the id
  const newList = list.filter ((todo) => todo.id !==id);
  // checks id of todo, if not equal to id of chosen deleted todo, will add to new list excluding chosen todo to remove

  setList(newList);
};


  return  (
  <div>
    <h1 style={{color: "dark grey"}}  ><strong>To-Do App </strong> </h1>

    <div className="TodoForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={num}
          placeholder="Num"
          onChange={(e) => setNum(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>


            {list.map((todo) => (
          <li key={todo.id}>
             Name= {todo.name} | num= {todo.num}
         <button onClick={() => deleteTodo(todo.id)}> Delete Todo </button>         
          </li>

        ))}



  </div>
  );
}

export default App