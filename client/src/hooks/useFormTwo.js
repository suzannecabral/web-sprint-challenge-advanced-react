import React, { useState } from "react";



export const useFormTwo = (initialValues) => {

    const [values, setValues] = useState(initialValues);


    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
    
    return [values, setValues, handleChanges];

};