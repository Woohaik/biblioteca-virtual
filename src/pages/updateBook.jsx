
import React from 'react';
import axios from "axios"
import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useParams } from "react-router-dom";
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
        .integer()
        .min(1)
        .max(10, 'No puede ser mayor a 10')
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


const updateBook = () => {

    const router = useRouter()
    const [libro, setLibro] = useState([])

  useEffect(async () => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    console.log(id);

    const response = await axios.get(`http://localhost:4000/api/book/${id}`);  //${books.ID}
    setLibro(response.data.data.books);
    console.log(response.data.data.books);
    // libro = response.data.data.books;
    console.log("Libro: "+ libro);
    // console.log(books);
    //console.log(props.location.state);
  }, [])

    const handleRegisterSubmit = async (values, { setSubmitting }) => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id');
        console.log("Values: "+ JSON.stringify(values));
        const parsed = parseInt(values.Rate)
        console.log("Value Rate: "+ parsed);
        const response = await axios.post(`http://localhost:4000/api/book/updateBook/${id}`, values);
        
        if (response.data.Errors.length > 0) {
            response.data.Errors.forEach(err => {
                if (!err.message.includes("Invalid login")) window.alert(err.message);
            })
        }
        

        router.push("/libros")

    }

    return (
        <div className=" mt-5">
            <div className="mt-4">
            </div>
            <Formik
                enableReinitialize="true"
                initialValues={{
                    Name: libro.Name,
                    Genre: libro.Genre,
                    ISBN: libro.ISBN,
                    Author: libro.Author,
                    PublicationYear: libro.PublicationYear,
                    Rate: libro.Rate,
                    Editorial: libro.Editorial,
                    Synopsis: libro.Synopsis
                }}
                validationSchema={registerSchema}
                onSubmit={handleRegisterSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="mx-5 px-5">
                        <h1>Modifica el Libro: {libro.Name}</h1>
                        <hr />
                        <div className="form-group">
                            <label for="name">Nombre:</label>
                            <Field type="text" name="Name" className="form-control" defaultValue={libro.Name}/>
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
                            <Field type="number" name="Rate" id="rate" className="form-control text-center"  min="1" max="10" />
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
                                Editar Libro
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}


function handleRateChange(){
    document.getElementById("rate").value = parseInt(document.getElementById("rate").value) +1;
    console.log(document.getElementById("rate").value);
    document.getElementById("rate").innerHTML = document.getElementById("rate").value;
}

function add(id){
    document.getElementById(id).parentNode.querySelector('input[type=number]').stepUp();
    
 }
 
 function substract(id){
    document.getElementById("rate").value = document.getElementById(id).parentNode.querySelector('input[type=number]').stepDown();
 }

export default updateBook;