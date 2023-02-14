import {useParams} from "react-router-dom";

export default function EditStudent(){
    const {id} = useParams();

    return(
        <h1>Edit Student</h1>
    )
}