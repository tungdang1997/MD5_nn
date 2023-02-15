import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function DeleteStudent(){
    const {id} = useParams();
    const navigate = useNavigate()
    return(
        <table>
            <tr>
                <td>Are You Sure</td>
                <td><button onClick={()=>{
                    axios.delete(`http://localhost:3000/students/${id}`).then(()=>{
                        navigate('/')
                    })
                }}>Yes</button></td>
                <td><button onClick={()=>{
                    navigate('/')
                }}>No</button></td>
            </tr>
        </table>
        // <Formik
        //     // validationSchema={validateSchema}
        //         onSubmit={(values)=>{
        //             axios.delete(`http://localhost:3000/students/${id}`).then(()=>{
        //                 navigate('/')
        //             })
        //         }}
        //         enableReinitialize={true}
        // >
        //     <Form>
        //         <p>Are You Sure?</p>
        //         <button>Delete</button>
        //     </Form>
        // </Formik>
    );
}