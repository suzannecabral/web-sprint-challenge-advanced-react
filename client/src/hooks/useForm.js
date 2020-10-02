import React from "react";
import { useLocalStorage } from "./useLocalStorage";

// write your custom hook here to control your checkout form

export const useForm = (key, initialValues) => {

    const [formValues, setFormValues] = useLocalStorage(key, initialValues);

    // const handleChanges = e = {
    //     setFormValues({
    //         ...formValues,
    //         [e.target.name]:e.target.value
    //     });
    // };

        const handleChanges = e = {
        setFormValues({
            [e.target.name],e.target.value
        });
    }

    //this is for the form buttonss

    //submit button, also submit on enter key
    const handleSubmit = e => {
        e.preventDefault();
    };

    //clear button
    const clearForm = e => {
        e.preventDefault();
        setFormValues(initialValues);
    };

    return[formValues, clearForm, handleSubmit, handleChanges];
};