import React, { useState } from "react";



export const useFormTwo = (initialValues) => {

    const [values, setValues] = useState(initialValues);

    return [values, setValues];

};