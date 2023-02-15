import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import * as yup from "yup";
import {useDispatch} from "react-redux";

export default function Login() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const signUpSchema = yup.object().shape({
        username: yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Firstname is required"),
    })
    const handleLogin = async (values) => {
        let data = await dispatch(loginUser(values))
        navigate(data.payload.data.roles.length > 1 ? 'admin' : 'user')
    }
    return (
        <>
            <div className={'row mt-3'}>
                <div className={'offset-3 col-6'}>

                    <h1 className={'text-center'}>Login</h1>
                    <Formik
                        initialValues={
                            {
                                username: '',
                                password: '',
                            }
                        }
                        onSubmit={(values) => handleLogin(values)}
                        validationSchema={signUpSchema}
                    >
                        <Form className={'form-group d-flex justify-content-center flex-column'}>
                            <Field name={'username'} className={'form-control mb-2'}></Field>
                            <ErrorMessage name={'username'}/>
                            <Field name={'password'} className={'form-control mb-2'}></Field>
                            <button className={'btn btn-primary'}>Login</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}
