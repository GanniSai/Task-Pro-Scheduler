
import axios from "axios"


const commonUrl=axios.create({ baseURL:"http://localhost:2020"});




      export const RetriveUserNameTodos=
      (username)=>commonUrl.get(`/users/${username}/todos`)


      export const DeleteTodoUser=
      (username,id)=> commonUrl.delete(`/users/${username}/todos/${id}`)

      export const RetriveTodosApi=
      (username,id)=> commonUrl.get(`/users/${username}/todos/${id}`)