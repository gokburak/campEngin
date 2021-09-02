import React from "react";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import { Form, Formik   } from "formik";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";


export default function ProductAdd() {
  const initialValues = { name: "", population: 10 };

  const schema = Yup.object({
    name: Yup.string().required("Ülke Adı Zorunlu"),
    population: Yup.number().required("Nüfus zorunlu"),
  });
  return (
    <Formik initialValues=
    {initialValues}
     validationSchema={schema}
     onSubmit={(values)=>{
         console.log(values)
     }}
    >
      <Form className="ui form">
          <KodlamaIoTextInput name="name" placeholder="Ülke Adı"   />
          <KodlamaIoTextInput name="population" placeholder="Ülke nüfusu"   />
       
        <Button color="green" type="submit">EKLE</Button>
      </Form>
    </Formik>
  );
}
