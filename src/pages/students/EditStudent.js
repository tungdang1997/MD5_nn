import {useNavigate, useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import axios from "axios";

export default function EditStudent(){
    const [listEdit, setListEdit] = useState({
        name: '',
        description: '',
        action: ''
    })
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3000/students/${id}`).then(res=>{
            setListEdit(res.data)
        })
    },[])

    const navigate = useNavigate()
    return(

        <>
            <Formik initialValues={{
                name: listEdit.name,
                description: listEdit.description,
                action: listEdit.action
            }}
                    // validationSchema={validateSchema}
                    onSubmit={(values)=>{
                        console.log(values)
                        axios.put(`http://localhost:3000/students/${id}`,values).then(()=>{
                            navigate('/')
                        })
                    }}
                    enableReinitialize={true}
            >
                <Form >
                    <Field name={'name'}></Field>
                    {/*<ErrorMessage name={'name'}></ErrorMessage>*/}
                    <Field name={'description'}></Field>
                    {/*<ErrorMessage name={'description'}></ErrorMessage>*/}
                    <Field name={'action'}></Field>
                    {/*<ErrorMessage name={'action'}></ErrorMessage>*/}
                    <button>Save</button>
                </Form>
            </Formik>


        </>
    )
}