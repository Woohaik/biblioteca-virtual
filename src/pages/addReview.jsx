
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { axiosBaseURL } from "./../config/axios.ts"
import * as Yup from 'yup';
import Link from 'next/link';

import { useRouter } from 'next/router'
const reviewSchema = Yup.object().shape({
    Rate: Yup.string()
        .min(0, 'Muy Corto!')
        .max(50, 'Muy Largo!')
        .required('Required'),
    Commentary: Yup.string()
        .min(0, 'Muy Corto!')
        .max(180, 'Muy Largo!')
        .required('Required'),
    UserId: Yup.string()
        .min(0, 'Muy Corto!')
        .max(50, 'Muy Largo!')
        .required('Required'),
    BookId: Yup.string()
        .min(0, 'Muy Corto!')
        .max(50, 'Muy Largo!')
        .required('Required'),
});


const addReview = () => {

    const router = useRouter()


    const handleReviewSubmit = async (values, { setSubmitting }) => {
        const response = await axiosBaseURL.post("/review", values);
        //setSubmitting(false);
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
                    Rate: "",
                    Commentary: "",
                    UserId:"",
                    BookId:""
                }}
                validationSchema={reviewSchema}
                onSubmit={handleReviewSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="mx-5 px-5">
                        <h1>Opina sobre un libro!</h1>
                        <hr />
                        <div className="form-group">
                            <label for="name">ID del usuario:</label>
                            <Field type="text" name="UserId" className="form-control" />
                            <ErrorMessage name="UserId" component="div" />
                        </div>
                        <div className="form-group">
                            <label for="name">ID del libro:</label>
                            <Field type="text" name="BookId" className="form-control" />
                            <ErrorMessage name="BookId" component="div" />
                        </div>
                        <div className="form-group">
                            <label for="name">Puntuacion:</label>
                            <Field type="text" name="Rate" className="form-control" />
                            <ErrorMessage name="Rate" component="div" />
                        </div>
                        <div className="form-group">
                            <label for="name">Comentario:</label>
                            <Field type="text" name="Commentary" className="form-control" />
                            <ErrorMessage name="Commentary" component="div" />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            Opinar
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default addReview;