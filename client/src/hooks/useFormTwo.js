import React, { useState } from "react";



export const useForm = (initialValues) => {

    const [values, setValues] = useState(initialValues);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);


    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
    };
    


    return [values, setValues, handleChanges, handleSubmit, showSuccessMessage];

};