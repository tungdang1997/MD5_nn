import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {type} from "@testing-library/user-event/dist/type";

export default function ListStudent(){
    const [list, setList] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/students').then(res=>{
            setList(res.data)
        })
    },[])
    return(
        <>
            <h1>List Student</h1>
            <table class="table table-striped table-dark">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Address</th>
                    <th scope="col" colSpan={2}>Action</th>
                </tr>
                </thead>
            {list.map((item, key)=>{
                return(
                    <tbody>
                    <tr>
                        <td><h3 key={key}>{item.name}</h3></td>
                        <td><h3 key={key}>{item.description}</h3></td>
                        <td><h3 key={key}>{item.action}</h3></td>
                        <td><Link to={'/edit-student/' + item.id}><button>Edit</button> </Link></td>
                        <td><Link to={'/delete-student/' + item.id}><button>Delete</button> </Link></td>
                    </tr>
                    </tbody>



                )
            })}
            </table>
        </>
    )
}