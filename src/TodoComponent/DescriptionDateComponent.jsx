import { useEffect } from "react"
import { useAuth } from "./Security/AuthContext"
import { useParams } from "react-router-dom"
import {RetriveTodosApi} from "./TodoApi/ListTodosService"

export default function DescriptionComponent()
{
const {id}=useParams()

const authContext=useAuth()
const username=authContext.username


    useEffect(
        () =>retriveTodos()[id]
    )



function retriveTodos()
{
    RetriveTodosApi(username,id)
}





return(
    <>
   
    <div className="descriptionbox"></div>
    <label>Description</label>
    <input type="text" />
    <label>TargetDate</label>
    <input type="date" />
    </>
)
}