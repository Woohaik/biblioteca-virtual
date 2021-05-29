
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { axiosBaseURL } from "./../config/axios.ts"
import * as Yup from 'yup';

import { useRouter } from 'next/router'
const registerSchema = Yup.object().shape({
    Email: Yup.string()
        .min(3, 'Muy Corto!')
        .max(50, 'Muy Largo!')
        .required('Required'),
    Username: Yup.string()
        .min(3, 'Muy Corto!')
        .max(50, 'Muy Largo!')
        .required('Required'),
    LastName: Yup.string()
        .min(3, 'Muy Corto!')
        .max(50, 'Muy Largo!')
        .required('Required'),
    Name: Yup.string()
        .min(3, 'Muy Corto!')
        .max(50, 'Muy Largo!')
        .required('Required'),
    Email: Yup.string().email('Invalido').required('Required'),
    Password: Yup.string()
        .min(3, 'Muy Corto!')
        .max(50, 'Muy Largo!')
        .required('Required'),
});


const registrarse = () => {

    const router = useRouter()


    const handleRegisterSubmit = async (values, { setSubmitting }) => {
        const response = await axiosBaseURL.post("/user", values);
        setSubmitting(false);
        if (response.data.Errors.length > 0) {
            response.data.Errors.forEach(err => {
                if (!err.message.includes("Invalid login")) window.alert(err.message);
            })
        }
        

        router.push("/")

    }

    return (
        <div className=" mt-5">
            <div className="mt-4">
            </div>
            <Formik
                initialValues={{
                    Email: "wilfredo.hernandez.ar@gmail.com",
                    Name: "w",
                    Password: "d",
                    Username: "pepe",
                    LastName: "ddf"
                }}
                validationSchema={registerSchema}
                onSubmit={handleRegisterSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="mx-5 px-5">
                        <h1>Registrate!</h1>
                        <hr />
                        <div className="form-group">
                            <label for="name">Nombre:</label>
                            <Field type="text" name="Name" className="form-control" />
                            <ErrorMessage name="Name" component="div" />
                        </div>
                        <div className="form-group">
                            <label for="name">Apellido:</label>
                            <Field type="text" name="LastName" className="form-control" />
                            <ErrorMessage name="LastName" component="div" />
                        </div>
                        <div className="form-group">
                            <label for="name">Email:</label>
                            <Field type="email" name="Email" className="form-control" />
                            <ErrorMessage name="Email" component="div" />
                        </div>
                        <div className="form-group">
                            <label for="name">Usuario:</label>
                            <Field type="text" name="Username" className="form-control" />
                            <ErrorMessage name="Username" component="div" />
                        </div>
                        <div className="form-group">
                            <label for="name">Contraseña:</label>

                            <Field type="password" name="Password" className="form-control" />
                            <ErrorMessage name="Password" component="div" />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            Registrarse
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )


}


export default registrarse;