
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { axiosBaseURL } from "./../config/axios.ts"
import * as Yup from 'yup';

import { useRouter } from 'next/router'
const registerSchema = Yup.object().shape({
    Name: Yup.string()
        .min(3, 'Muy Corto!')
        .max(50, 'Muy Largo!')
        .required('Required'),
    Author: Yup.string()
        .min(3, 'Muy Corto!')
        .max(50, 'Muy Largo!')
        .required('Required'),
    PublicationYear: Yup.string()
        .min(3, 'Muy Corto!')
        .max(50, 'Muy Largo!')
        .required('Required'),
    Rate: Yup.number()
        .required('Required'),
    Genre: Yup.string()
        .min(3, 'Muy Corto!')
        .max(50, 'Muy Largo!')
        .required('Required'),
    ISBN: Yup.string()
        .min(3, 'Muy Corto!')
        .max(50, 'Muy Largo!')
        .required('Required'),
    Editorial: Yup.string()
        .min(3, 'Muy Corto!')
        .max(50, 'Muy Largo!')
        .required('Required'),
    Synopsis: Yup.string()
        .min(3, 'Muy Corto!')
        .max(50, 'Muy Largo!')
        .required('Required'),
});


const addBooks = () => {

    const router = useRouter()


    const handleRegisterSubmit = async (values, { setSubmitting }) => {
        const response = await axiosBaseURL.post("/book", values);
        //setSubmitting(false);
        if (response.data.Errors.length > 0) {
            response.data.Errors.forEach(err => {
                if (!err.message.includes("Invalid creation of book")) window.alert(err.message);
            })
        }
        
        router.push("/libros")

    }

    return (
        <div className=" mt-5">
            <div className="mt-4">
            </div>
            <Formik
                initialValues={{
                    Name: "",
                    Genre: "",
                    ISBN: "",
                    Author: "",
                    PublicationYear: "",
                    Rate: 5,
                    Genre: "",
                    ISBN: "",
                    Editorial: "",
                    Synopsis: ""

                }}
                validationSchema={registerSchema}
                onSubmit={handleRegisterSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="mx-5 px-5">
                        <h1>Registra un Libro!</h1>
                        <hr />
                        <div className="form-group">
                            <label for="name">Nombre:</label>
                            <Field type="Name" name="Name" className="form-control" />
                            <ErrorMessage name="Name" component="div" />
                        </div>
                        <div className="form-group">
                            <label for="name">Autor:</label>
                            <Field type="text" name="Author" className="form-control" />
                            <ErrorMessage name="Author" component="div" />
                        </div>
                        <div className="form-group">
                            <label for="name">Género:</label>
                            <Field type="text" name="Genre" className="form-control" />
                            <ErrorMessage name="Genre," component="div" />
                        </div>
                        <div className="form-group">
                            <label for="name">Año de Publicación:</label>
                            <Field type="text" name="PublicationYear" className="form-control" />
                            <ErrorMessage name="PublicationYear" component="div" />
                        </div>
                        <div className="form-group">
                            <label for="name">Calificación:</label>
                            <div className="number-wrapper number-input text-center"> 
                            <input type="button" onClick={() => substract("minus")} id="minus" className="operation btn btn-light" value="-"/>
                            <Field type="number" name="Rate" className="form-control"  min="1" max="10" />
                            <input type="button" onClick={() =>add("plus")} id="plus" className="operation btn" value="+"/>
                            </div>
                            <ErrorMessage name="Rate" component="div" />
                        </div>
                        <div className="form-group">
                            <label for="name">ISBN:</label>

                            <Field type="text" name="ISBN" className="form-control" />
                            <ErrorMessage name="ISBN" component="div" />
                        </div>
                        <div className="form-group">
                            <label for="name">Editorial:</label>

                            <Field type="text" name="Editorial" className="form-control" />
                            <ErrorMessage name="Editorial" component="div" />
                        </div>
                        <div className="form-group">
                            <label for="name">Sinopsis:</label>

                            <Field type="text" name="Synopsis" className="form-control" />
                            <ErrorMessage name="Synopsis" component="div" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                Crear Libro
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

function add(id){
    document.getElementById(id).parentNode.querySelector('input[type=number]').stepUp();
 }
 
 function substract(id){
     document.getElementById(id).parentNode.querySelector('input[type=number]').stepDown();
 }

export default addBooks;