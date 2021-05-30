import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { axiosBaseURL } from "./../config/axios.ts"
import * as Yup from 'yup';

import { useRouter } from 'next/router'
const bookingSchema = Yup.object().shape({
    userID: Yup.string()
        .min(0, 'Muy Corto!')
        .max(50, 'Muy Largo!')
        .required('Required'),
    bookID: Yup.string()
        .min(0, 'Muy Corto!')
        .max(50, 'Muy Largo!')
        .required('Required'),
    // Format: Yup.string()
    //     .min(0, 'Muy Corto!')
    //     .max(50, 'Muy Largo!')
    //     .required('Required'),
    // Presentation: Yup.string()
    //     .min(0, 'Muy Corto!')
    //     .max(50, 'Muy Largo!')
    //     .required('Required'),
    // StartDate: Yup.string()
    //     .min(0, 'Muy Corto!')
    //     .max(50, 'Muy Largo!')
    //     .required('Required'),
    // EndDate: Yup.string()
    //     .min(0, 'Muy Corto!')
    //     .max(50, 'Muy Largo!')
    //     .required('Required'),
});


const addBooking = () => {

    const router = useRouter()


    const handleBookingSubmit = async (values, { setSubmitting }) => {
        const response = await axiosBaseURL.post("/booking", values);
        setSubmitting(false);
        if (response.data.Errors.length > 0) {
            response.data.Errors.forEach(err => {
                if (!err.message.includes("Invalid booking")) window.alert(err.message);
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
                    userID: "",
                    bookID: "",
                    // Format: "",
                    // Presentation: "",
                    // StartDate: "",
                    // EndDate: "",
                }}
                validationSchema={bookingSchema}
                onSubmit={handleBookingSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="mx-5 px-5">
                        <h1>Reserva!</h1>
                        <hr />
                        <div className="form-group">
                            <label for="name">Id de Usuario:</label>
                            <Field type="text" name="userID" className="form-control" />
                            <ErrorMessage name="userID" component="div" />
                        </div>
                        <div className="form-group">
                            <label for="name">Id del Libro:</label>
                            <Field type="text" name="bookID" className="form-control" />
                            <ErrorMessage name="bookID" component="div" />
                        </div>
                        {/* <div className="form-group">
                            <label for="name">Formato del Libro:</label>
                            <Field type="text" name="Format" className="form-control" />
                            <ErrorMessage name="Format" component="div" />
                        </div>
                        <div className="form-group">
                            <label for="name">Presentación del Libro:</label>
                            <Field type="text" name="Presentation" className="form-control" />
                            <ErrorMessage name="Presentation" component="div" />
                        </div>
                        <div className="form-group">
                            <label for="name">Fecha de Recogida:</label>
                            <Field type="text" name="StartDate" className="form-control" />
                            <ErrorMessage name="StartDate" component="div" />
                        </div>
                        <div className="form-group">
                            <label for="name">Fecha de Vuelta:</label>
                            <Field type="text" name="EndDate" className="form-control" />
                            <ErrorMessage name="EndDate" component="div" />
                        </div> */}
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            Reservar
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )


}


export default addBooking;