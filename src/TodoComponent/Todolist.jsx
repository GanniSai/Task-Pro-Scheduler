import { useAuth } from "./Security/AuthContext"
import { useEffect, useState } from "react"
import {RetriveUserNameTodos,DeleteTodoUser} from './TodoApi/ListTodosService'
import { Navigate } from "react-router-dom"


 export default function Todolist()
{
//   const today=new Date()
//  const targetDate=new Date(today.getFullYear+2 , today.getMonth ,today.getDay)
  // const todos=[{id:530 , name:"GanniSai", description:"Java Full Stack", done:"false "},
  //   {id:531 , name:"GanniSai", description:"Spoken English", done:"false "},
  //   {id:532 , name:"GanniSai", description:"Core Java", done:"false "},
  //   {id:533 , name:"GanniSai", description:"My Sql", done:"false "},
  //   {id:533 , name:"GanniSai", description:"Aws", done:"false "}
  // ]

  const authContext=useAuth()
  const username=authContext.username

  useEffect( 
    ()=>listOfAllTodos() ,[]
  );


const[todos,setTodos]=useState([])
const[message,setMessage]=useState(null)

function listOfAllTodos()
{
  RetriveUserNameTodos("clevera")
  .then(
      (response)=>
        {console.log(response)
          setTodos(response.data)
        }
  )
  .catch(
      (error)=>console.log(error)
  )
  .finally(
      console.log(`cleanup`)
  )
  
}

function deleteTodo(id)
{
  DeleteTodoUser(username,id)

  .then(
    (response) =>
    {
      
      setMessage(`Deleted User With id : ${id}`)
      listOfAllTodos()
    }  
)
.catch(
    (error)=>console.log(error)
)
.finally(
  console.log(`cleanup`)
)
}




function updateTodo(id)
{
console.log(`clicked ${id}`)
Navigate(`/todo/${id}`)
}

  

return(
    <>
    
    <div className="container">
    <h1>Welcome to TodosList</h1>
    {message && <div className="deletemessgagebyid">{message}</div> }
    <table>
    <thead name="tablehead">
<tr>
  <td>Id</td>
  <td>Name</td>
  <td>Description</td>
  <td>TargetDate</td>
  <td>Completed?</td>
  <td>Delete</td>
  <td>Update</td>
</tr>
    </thead>
    <tbody className="todotabledata">
      {todos.map(todo=>
              <tr key={todo.id}>
<td>{todo.id}</td>
<td>{todo.username}</td>
<td>{todo.description}</td>
<td>{todo.targetDate}</td>
<td>{todo.done.toString()}</td>
<td><button className="deleteButton" onClick={()=>deleteTodo(todo.id)}>Delete</button></td>
<td><button className="updateButton" onClick={()=>updateTodo(todo.id)}> Update</button></td>
      </tr>
    )}
    </tbody>
    </table>
    </div>
    </>
)
}