import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

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
            <table border="2px">
            {list.map((item, key)=>{
                return(

                        <tr>
                            <td><h3 key={key}>{item.name}</h3></td>
                            <td><h3 key={key}>{item.description}</h3></td>
                            <td><h3 key={key}>{item.action}</h3></td>
                            <td><Link to={'/edit-student/' + item.id}><button>Edit</button> </Link></td>
                            <td><Link to={'/delete-student/' + item.id}><button>Delete</button> </Link></td>
                        </tr>


                )
            })}
            </table>
        </>
    )
}